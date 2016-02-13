import {gcloud} from 'meteor/sarai:lib';
import {Meteor} from 'meteor/meteor';

let bucket = null;

if (Meteor.settings && Meteor.settings.gcloud) {
  const {projectId, keyFilename, bucketName} = Meteor.settings.gcloud;
  const gcs = gcloud.storage({projectId, keyFilename});
  bucket = gcs.bucket(bucketName);
}

export default bucket;
