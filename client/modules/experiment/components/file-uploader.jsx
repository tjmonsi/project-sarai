// const {XMLHttpRequest, FormData} = global;
// // import {Accounts} from 'meteor/accounts-base';
// // import {Meteor} from 'meteor/meteor';
// import React from 'react';

// class FileUploaderExperiment extends React.Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit() {
//     if (XMLHttpRequest && FormData && Accounts && Accounts._storedLoginToken()) {
//       const el = this.file;
//       console.log(el.files);
//       const uri = '/file-upload';
//       const xhr = new XMLHttpRequest();
//       const fd = new FormData();
//       xhr.open('POST', uri, true);
//       // xhr.setRequestHeader('x-user-id', Meteor.userId());
//       // xhr.setRequestHeader('x-user-token', Accounts._storedLoginToken());
//       xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           console.log(xhr.responseText);
//         }
//       };
//       if ((el.value.trim() !== '') && (el.files.length > 0) && (el.files[0])) {
//         fd.append('myFile', el.files[0]);
//         xhr.send(fd);
//       }
//     }
//   }
//   render() {
//     const ref = (c) => {
//       this.file = c;
//     };

//     return (
//       <div>
//         <input
//           ref={ref}
//           type="file"
//         />
//         <button onClick={this.handleSubmit} >
//           {'Submit file'}
//         </button>
//       </div>
//     );
//   }
// }

// export default FileUploaderExperiment;
