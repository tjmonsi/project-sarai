// will be part of version 1.2
import {Mongo} from 'meteor/mongo';

const Banner = new Mongo.Collection('sarai-banner');

Banner.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Banner.methods = {};

export default Banner;
