export default {
  saveBanner: (context, path, title, background, text, callback) => {
    const {Meteor} = context;
    Meteor.call('LandingData.update', path, title, background, text, callback);
  }
};
