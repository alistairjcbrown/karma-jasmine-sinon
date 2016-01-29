(function() {
  'use strict';

  function JasmineSinon(files) {
    var jasmineSinonPath = require.resolve('jasmine-sinon').replace('index.js', 'lib/jasmine-sinon.js');
    files.push({ pattern: jasmineSinonPath, included: true, served: true, watched: false });
  }

  JasmineSinon.$inject = ['config.files'];

  module.exports = {
    'framework:jasmine-sinon': ['factory', JasmineSinon]
  };

}());
