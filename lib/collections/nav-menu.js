import {Mongo} from 'meteor/mongo';

const NavMenu = new Mongo.Collection('nav-menu');

NavMenu.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

NavMenu.methods = {};

export default NavMenu;
