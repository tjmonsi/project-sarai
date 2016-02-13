import {Picker} from 'meteor/meteorhacks:picker';
import bucket from './../lib/gcloud-bucket';
import authenticate from './../lib/authenticate';
import errorSend from './../lib/error-send';
import streamFile from './../lib/stream-file';

Picker.route('/v1/get-file', (params, req, res) => {
  const {query} = params;
  const {name} = query;
  const {user, error} = authenticate(query);

  if (!user) errorSend(new Error('You are not authorized to get the file'), res);
  else if (!name) errorSend(new Error('Need "name" value'), res);
  else if (!bucket) errorSend(new Error('Contact admin, settings not set...'), res);
  else if (error) errorSend(error, res);
  else {
    const file = bucket.file(name);
    file.getMetadata((err, metadata) => {
      if (err) errorSend(err, res);
      else streamFile(file, metadata, res);
    });
  }
});
