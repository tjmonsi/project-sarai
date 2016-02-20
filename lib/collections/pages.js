import {Mongo} from 'meteor/mongo';

const PagesData = new Mongo.Collection('pages-write-up');

PagesData.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

PagesData.methods = {};

export default PagesData;
