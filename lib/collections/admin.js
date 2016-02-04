import {Mongo} from 'meteor/mongo';

const Admin = new Mongo.Collection('admin');

Admin.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Admin.methods = {};

export default Admin;
