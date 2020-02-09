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
    factory(root.expect, root.DiffbotEnhanceService);
  }
}(this, function(expect, DiffbotEnhanceService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DiffbotEnhanceService.BulkjobRecoveryStatusResponse();
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

  describe('BulkjobRecoveryStatusResponse', function() {
    it('should create an instance of BulkjobRecoveryStatusResponse', function() {
      // uncomment below and update the code to test BulkjobRecoveryStatusResponse
      //var instane = new DiffbotEnhanceService.BulkjobRecoveryStatusResponse();
      //expect(instance).to.be.a(DiffbotEnhanceService.BulkjobRecoveryStatusResponse);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DiffbotEnhanceService.BulkjobRecoveryStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new DiffbotEnhanceService.BulkjobRecoveryStatusResponse();
      //expect(instance).to.be();
    });

  });

}));
