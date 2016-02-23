// Will be part of Version 1.2
import {Mongo} from 'meteor/mongo';

const Admin = new Mongo.Collection('sarai-admin');

Admin.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Admin.methods = {};

export default Admin;
