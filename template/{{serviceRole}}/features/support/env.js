defineSupportCode = require('cucumber').defineSupportCode;
fs = require('fs-extra')
World = require('./world');

defineSupportCode(function({After, setDefaultTimeout, setWorldConstructor}) {

  setDefaultTimeout(1000)
  setWorldConstructor(World)
  After(function (_testCaseResult, done) {
    this.process.kill()
    this.exocom.close(done)
  })

});
