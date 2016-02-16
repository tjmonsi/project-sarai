import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {LandingData} from '/lib/collections';
import adminAuthenticate from '/server/lib/admin-authenticate';

Meteor.methods({
  'LandingData.update': (path, title, background, text) => {
    check(path, String);
    check(title, String);
    check(background, String);
    check(text, String);
    if (adminAuthenticate) {
      return LandingData.upsert({path}, {$set: {title, background, text}});
    }
    throw new Meteor.Error('Not authorized');
  }
});
