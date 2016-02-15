import {Mongo} from 'meteor/mongo';

const Cms = new Mongo.Collection('cms');

Cms.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Cms.methods = {};

export default Cms;
