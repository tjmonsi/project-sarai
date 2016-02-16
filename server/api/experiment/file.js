// import {gcloud} from 'meteor/sarai:lib';
// import {Picker} from 'meteor/meteorhacks:picker';
// import {Accounts} from 'meteor/accounts-base';
// import {Meteor} from 'meteor/meteor';
// import _ from 'underscore';
// let bucket = null;

// if (Meteor.settings && Meteor.settings.gcloud) {
//   const {projectId, keyFilename, bucketName} = Meteor.settings.gcloud;
//   const gcs = gcloud.storage({projectId, keyFilename});
//   bucket = gcs.bucket(bucketName);
// }

// const errorSend = (err, res) => {
//   res.writeHead(500, {
//     'Content-Type': 'application/json'
//   });
//   const json = JSON.stringify({
//     error: err,
//     errMessage: err.message
//   });
//   res.end(json);
// };

// const streamData = (file, metadata, res) => {
//   const {contentType, size, cacheControl, contentEncoding,
//         contentDisposition, contentLanguage} = metadata;
//   file.createReadStream()
//     .on('response', () => {
//       // console.log(response.headers)
//       const headers = JSON.parse(JSON.stringify({
//         'Content-Type': contentType,
//         'Content-Length': size,
//         'Cache-Control': cacheControl,
//         'Content-Encoding': contentEncoding,
//         'Content-Disposition': contentDisposition,
//         'Content-Language': contentLanguage,
//       }));
//       res.writeHead(200, headers);
//     })
//     .on('end', () => {
//       res.end();
//     })
//     .on('error', (err) => {
//       errorSend(err, res);
//     })
//     .pipe(res);
// };

// const checkUser = (file, user, metadata, res) => {
//   if (user) {
//     streamData(file, metadata, res);
//   } else {
//     errorSend(new Error('Not allowed'), res);
//   }
// };

// const checkAcl = (file, user, metadata, res) => {
//   file.acl.get((err, aclObject) => {
//     if (err) {
//       errorSend(err, res);
//     } else if (!_.findWhere(aclObject, {entity: 'allUsers'})) {
//       checkUser(file, user, metadata, res);
//     } else {
//       streamData(file, metadata, res);
//     }
//   });
// };

// const getMetadata = (file, user, res) => {
//   file.getMetadata((err, metadata) => {
//     if (err) {
//       errorSend(err, res);
//     } else {
//       // console.log(metadata);
//       checkAcl(file, user, metadata, res);
//     }
//   });
// };

// // Picker.route('/file/:folder/:name', (params, req, res) => {
// //   const {query, folder, name} = params;
// //   const {id, username, email, key, token} = query;
// //   let user = null;
// //   if (token && key && (id || username || email)) {
// //     const hashedToken = Accounts._hashLoginToken(token);
// //     if (username && username.trim() !== '') user = Accounts.findUserByUsername(username);
// //     else if (email && email.trim() !== '') user = Accounts.findUserByEmail(email);
// //     else if (id && id.trim() !== '') user = Meteor.users.findOne(id);
// //     if (!(user && user.services && user.services.resume &&
// //       user.services.resume.loginTokens)) {
// //       let flag = true;
// //       for (let i = 0; i < user.services.resume.loginTokens; i++) {
// //         const loginToken = user.services.resume.loginTokens[i];
// //         if (loginToken.hashedToken === hashedToken) {
// //           flag = false;
// //           break;
// //         }
// //       }
// //       if (flag) user = null;
// //     }
// //   }

// //   if (bucket) {
// //     const file = bucket.file(`${folder}/${name}`);
// //     console.log(file);
// //     getMetadata(file, user, res);
// //     // file.exists((err, exists) => {
// //     //   if (err) {
// //     //     errorSend(err, res);
// //     //   } else if (exists) {
// //     //     getMetadata(file, user, res);
// //     //   } else {
// //     //     res.writeHead(404, {
// //     //       'Content-Type': 'application/json'
// //     //     });
// //     //     res.end(JSON.stringify({
// //     //       errMessage: 'File not found'
// //     //     }));
// //     //   }
// //     // });
// //   } else {
// //     res.writeHead(500, {
// //       'Content-Type': 'application/json'
// //     });
// //     res.end(JSON.stringify({
// //       errMessage: 'Please contact admin. Configuration file is non-existent'
// //     }));
// //   }
// // });
