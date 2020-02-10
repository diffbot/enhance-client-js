/**
 * Diffbot Enhance Service
 * Enhance is an API to find a person or organization in the Knowledge Graph using partial data
 *
 * The version of the OpenAPI document: v1.0.0
 * Contact: support@diffbot.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.diffbot.kg.enhance.openapi.invoker/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.diffbot.kg.enhance.openapi.invoker/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.@DiffbotEnhanceClient);
  }
}(this, function(expect, @DiffbotEnhanceClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @DiffbotEnhanceClient.BulkjobAccepted();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BulkjobAccepted', function() {
    it('should create an instance of BulkjobAccepted', function() {
      // uncomment below and update the code to test BulkjobAccepted
      //var instane = new @DiffbotEnhanceClient.BulkjobAccepted();
      //expect(instance).to.be.a(@DiffbotEnhanceClient.BulkjobAccepted);
    });

    it('should have the property jobId (base name: "job_id")', function() {
      // uncomment below and update the code to test the property jobId
      //var instane = new @DiffbotEnhanceClient.BulkjobAccepted();
      //expect(instance).to.be();
    });

  });

}));
