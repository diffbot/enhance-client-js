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
    factory(root.expect, root.DiffbotEnhanceClient);
  }
}(this, function(expect, DiffbotEnhanceClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DiffbotEnhanceClient.BulkEnhanceEndpointApi();
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

  describe('BulkEnhanceEndpointApi', function() {
    describe('bulkjobStatus', function() {
      it('should call bulkjobStatus successfully', function(done) {
        //uncomment below and update the code to test bulkjobStatus
        //instance.bulkjobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('enhanceBulkjob', function() {
      it('should call enhanceBulkjob successfully', function(done) {
        //uncomment below and update the code to test enhanceBulkjob
        //instance.enhanceBulkjob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pollBulkjob', function() {
      it('should call pollBulkjob successfully', function(done) {
        //uncomment below and update the code to test pollBulkjob
        //instance.pollBulkjob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopBulkjob', function() {
      it('should call stopBulkjob successfully', function(done) {
        //uncomment below and update the code to test stopBulkjob
        //instance.stopBulkjob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
