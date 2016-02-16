import {Picker} from 'meteor/meteorhacks:picker';
import bucket from './../lib/gcloud-bucket';
import authenticate from './../lib/authenticate';
import errorSend from './../lib/error-send';
import multiparty from 'multiparty';

Picker.route('/v1/upload-file', (params, req, res) => {
  const {query} = params;
  const folder = query.p && query.p === 'true' ? 'private' : 'public';
  // query.collection = 'Admin';
  const {user, error} = authenticate(query);
  if (user && bucket) {
    const form = new multiparty.Form();
    let partError = null;
    let file = null;

    form.on('part', (part) => {
      if (!part.filename) {
        // console.log('got field name '+part.name);
        part.resume();
      }
      if (part.filename) {
        file = bucket.file(`${folder}${query.prefix}/${part.filename}`);
        if (file) {
          file.exists((err1, exists) => {
            if (err1) partError = err1;
            else if (exists) partError = new Error('File already exists');

            if (partError) part.resume();
            else {
              // console.log(part.headers);
              part.pipe(file.createWriteStream({metadata: {
                contentType: part.headers['content-type']
              }}))
              .on('error', (err) => {
                partError = err;
                part.resume();
              })
              .on('finish', () => {
                if (query.p && query.p === 'true') {
                  file.makePrivate((err) => {
                    if (err) partError = err;
                    // console.log(apiResponse);
                    part.resume();
                  });
                } else {
                  file.makePublic((err) => {
                    if (err) partError = err;
                    // console.log(apiResponse);
                    part.resume();
                  });
                }
              });
            }
          });
        }
      }
      part.on('error', (err) => {
        partError = err;
        // console.log(partError);
        // console.log('Error at Part file-upload');
      });
      part.on('finish', () => {
        // console.log('Finish upload');
      });
    });
    form.on('error', (err) => {
      errorSend(err, res);
    });

    form.on('close', () => {
      if (partError) errorSend(partError, res);
      else {
        // console.log(file.name);
        res.end(JSON.stringify({
          file: file.name
        }));
      }
    });

    form.parse(req);
  } else if (error) {
    errorSend(error, res);
  } else if (!bucket) {
    // console.log(bucket);
    errorSend(new Error('Please contact admin, settings not set'), res);
  } else {
    // console.log(query);
    errorSend(new Error('Not Authorized'), res);
  }
});
