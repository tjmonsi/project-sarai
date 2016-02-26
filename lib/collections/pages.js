// will be part of version 1.2
import {Mongo} from 'meteor/mongo';

const PagesData = new Mongo.Collection('sarai-pages');

PagesData.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

PagesData.methods = {};

export default PagesData;
