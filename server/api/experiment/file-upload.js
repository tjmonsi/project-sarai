// import {Picker} from 'meteor/meteorhacks:picker';
// import {Accounts} from 'meteor/accounts-base';

// import util from 'util';

// import JSONStream from 'JSONStream';
// import {Meteor} from 'meteor/meteor';
// import multiparty from 'multiparty';

// Picker.route('/file-upload', (params, req, res) => {
//   const userId = req.headers['x-user-id'];
//   const userToken = req.headers['x-user-token'];
//   if (userId && userToken) {
//     // Authenticate userId and userToken here
//     const hashToken = Accounts._hashLoginToken(userToken);
//     console.log(userId);
//     console.log(userToken);
//     console.log(hashToken);

//     const form = new multiparty.Form();

//     form.on('part', (part) => {
//       // console.log(part.pipe);
//       if (!part.filename) {
//         // console.log('got field name '+part.name);
//         part.resume();
//       }

//       if (part.filename) {
//         // console.log('got file name '+part.filename);
//         part.resume();
//       }

//       part.on('error', (err) => {
//         console.log(err);
//         // part.resume();
//       });
//     });

//     form.on('error', (err) => {
//       console.log(err);
//       // something
//     });

//     form.on('close', () => {
//       res.end('Done');
//     });

//     form.parse(req);
//   } else {
//     res.end('');
//   }
// });
