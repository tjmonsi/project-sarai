import {Picker} from 'meteor/meteorhacks:picker';
import bucket from './../lib/gcloud-bucket';
import errorSend from './../lib/error-send';

Picker.route('/v1/get-files', (params, req, res) => {
  const {query} = params;
  const folder = query.p && query.p === 'true' ? 'private' : 'public';
  const token = query.token && query.token !== '' ? query.token : null;
  if (!query.prefix) query.prefix = '';
  const options = {
    autoPaginate: false,
    maxResults: 60,
    pageToken: token,
    prefix: folder+query.prefix
  };
  if (bucket) {
    bucket.getFiles(options, (err, files, nextQuery) => {
      if (err) errorSend(err, res);
      else {
        const obj = { files: [], nextQuery };
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
