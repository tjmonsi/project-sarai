// import {LandingData} from '/lib/collections';
import {Meteor} from 'meteor/meteor'

export default {
  saveBanner(context, title, background, text) {
    console.log(title, background, text);
    Meteor.call('LandingData.update', 'cms.root', title, background, text, (err, res) => {
      if (err) {
        console.error(err)
      } else {
        console.log(res);
      }
    })
  }
}