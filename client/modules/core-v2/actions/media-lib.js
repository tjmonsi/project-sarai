export default {
  getFileHandle: (context, file) => {
    const {Accounts, Meteor, FlowRouter} = context;
    const userId = Meteor.userId();
    const token = Accounts._storedLoginToken();
    // return `/v1/get-file?name=${file}&id=${encodeURIComponent(userId)}
    // &token=${encodeURIComponent(token)}`;
    return FlowRouter.path('/v1/get-file', {}, {
      name: file,
      id: userId,
      token
    });
  },
  getFilesHandle: (context, prefix, publicFlag, XMLHttpRequest, nextQuery, filename, callback) => {
    const {mediaLib, FlowRouter} = context;
    if (XMLHttpRequest) {
      // console.log('Get Files');
      const xhr = new XMLHttpRequest();
      const p = !publicFlag ? 'true' : 'false';
      const name = filename ? `${prefix}/${filename}` : `${prefix}/`;
      // const token = nextQuery && nextQuery !== '' ?
      // `&token=${encodeURIComponent(nextQuery)}` : '';
      // const uri = `/v1/get-files?prefix=${name}&p=${p}${token}`;
      const uri = FlowRouter.path('/v1/get-files', {}, {
        p,
        prefix: name,
        token: nextQuery
      });
      xhr.open('GET', uri, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const obj = JSON.parse(xhr.responseText);
          const files = [];
          for (let i = 0; i < obj.files.length; i++) {
            files.push({
              file: obj.files[i].name,
              type: obj.files[i].contentType,
              timeCreated: obj.files[i].timeCreated
            });
          }
          mediaLib.dispatch({
            type: 'ADD',
            files
          });
          if (obj.nextQuery && obj.nextQuery.pageToken && obj.nextQuery.pageToken.trim() !== '') {
            mediaLib.dispatch({
              type: 'SET_TOKEN',
              token: obj.nextQuery.pageToken
            });
          } else {
            mediaLib.dispatch({
              type: 'REMOVE_TOKEN'
            });
          }
        } else if (xhr.status !== 200) {
          callback(JSON.parse(xhr.responseText));
        }
      };
      xhr.send();
    } else {
      callback({
        errorMessage: 'Weird Error because XMLHttpRequest doesn\'t exists'
      });
    }
  },
  uploadFileHandle: (context, files, prefix, publicFlag, authenticate,
    XMLHttpRequest, FormData, callback) => {
    const {Accounts, Meteor, FlowRouter} = context;
    if (XMLHttpRequest && FormData && authenticate()) {
      // console.log('Upload');
      const xhr = new XMLHttpRequest();
      const fd = new FormData();
      const userId = Meteor.userId();
      const token = Accounts._storedLoginToken();
      const p = !publicFlag ? 'true' : 'false';
      // const uri = `/v1/upload-file?prefix=${prefix}&p=${p}
      // &id=${encodeURIComponent(userId)}&token=${encodeURIComponent(token)}`;
      const uri = FlowRouter.path('/v1/upload-file', {}, {
        prefix,
        p,
        token,
        id: userId
      });
      xhr.open('POST', uri, true);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          callback(null, JSON.parse(xhr.responseText));
        } else if (xhr.status !== 200) {
          callback(JSON.parse(xhr.responseText));
        }
      };
      if (files.length > 0 && files[0]) {
        fd.append('sarai-file', files[0]);
        xhr.send(fd);
      } else {
        callback({
          errorMessage: 'No Files Included'
        });
      }
    } else if (!authenticate()) {
      callback({
        errorMessage: 'You are not allowed to upload a file'
      });
    } else {
      callback({
        errorMessage: 'Weird Error because XMLHttpRequest or FormData or encodeURIComponent doesn\'t exists'
      });
    }
  },
  refreshFilesHandle: (context) => {
    const {mediaLib} = context;
    mediaLib.dispatch({
      type: 'CLEAR'
    });
  }
};
