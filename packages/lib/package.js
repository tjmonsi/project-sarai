Package.describe({
  name: 'sarai:lib',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.6');

  var packages = [
    'meteor-base',
    'mongo',
    // 'blaze-html-templates',
    'static-html',
    'jquery',
    'tracker',
    'standard-minifiers',
    'es5-shim',
    'ecmascript',    
    'http',
    'email',
    'underscore',    
    'fourseven:scss@3.4.1',
    'meteorhacks:kadira@2.27.2',
    'meteorhacks:kadira-profiler@1.2.1',
    'meteorhacks:picker@1.0.3',
    'kadira:debug@3.0.1',
    'kadira:flow-router@2.10.0',    
    'meteorhacks:sikka@1.0.1',
    'ongoworks:security@1.3.0',
    // 'zodiase:mdl@1.0.6_1',
    // users,
    'accounts-base@1.2.1',
    'accounts-ui@1.1.6',
    'accounts-password',
    'service-configuration@1.0.5',
    // methods that would be part of 1.3,
    'check',
    'mdg:validated-method@1.0.1',
    'mdg:validation-error@0.4.0',
    'aldeed:simple-schema@1.5.3'
  ];

  api.use(packages);
  api.imply(packages);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sarai:lib');
});
