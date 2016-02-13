import {Picker} from 'meteor/meteorhacks:picker';
import bucket from './../lib/gcloud-bucket';
import errorSend from './../lib/error-send';

Picker.route('/v1/get-files', (params, req, res) => {
  const options = {
    prefix: 'public/'
  };
  if (bucket) {
    bucket.getFiles(options, (err, files) => {
      if (err) errorSend(err, res);
      else {
        const obj = { files: [] };
        const headers = {
          'Content-Type': 'application/json'
        };
        for (let i = 0; i < files.length; i++) {
          obj.files.push(files[i].metadata);
        }
        res.writeHead(200, headers);
        res.end(JSON.stringify(obj));
      }
    });
  }
});
