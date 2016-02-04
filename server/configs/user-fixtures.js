import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

if (Meteor.users.find().fetch().length === 0 ) {
  Accounts.createUser({
    username: 'tester',
    email: 'tester@test.com',
    password: 'tester'
  });
}
