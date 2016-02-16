import {Accounts} from 'meteor/accounts-base';
import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default ({token, id, username, email, collection}) => {
  let user = null;
  let err = null;
  try {
    if (token && (id || username || email)) {
      const hashedToken = Accounts._hashLoginToken(token);
      if (username && username.trim() !== '') user = Accounts.findUserByUsername(username);
      else if (email && email.trim() !== '') user = Accounts.findUserByEmail(email);
      else if (id && id.trim() !== '') user = Meteor.users.findOne(id);
      if (user && user.services && user.services.resume && user.services.resume.loginTokens) {
        let flag = true;
        for (let i = 0; i < user.services.resume.loginTokens.length; i++) {
          const loginToken = user.services.resume.loginTokens[i];
          if (loginToken.hashedToken === hashedToken) {
            flag = false;
            break;
          }
        }
        if (collection) {
          flag = !Collections[collection].findOne(user._id);
        }
        if (flag) user = null;
      }
    }
  } catch (e) {
    err = e;
  }
  return {user, err};
};
