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


import ApiClient from './ApiClient';
import BulkjobAccepted from './com.diffbot.kg.enhance.openapi.model/BulkjobAccepted';
import BulkjobRecoveryStatusResponse from './com.diffbot.kg.enhance.openapi.model/BulkjobRecoveryStatusResponse';
import BulkjobStatus from './com.diffbot.kg.enhance.openapi.model/BulkjobStatus';
import BulkjobStatusResponse from './com.diffbot.kg.enhance.openapi.model/BulkjobStatusResponse';
import EnhanceResponse from './com.diffbot.kg.enhance.openapi.model/EnhanceResponse';
import RequestError from './com.diffbot.kg.enhance.openapi.model/RequestError';
import BulkEnhanceEndpointApi from './com.diffbot.kg.enhance.openapi.api/BulkEnhanceEndpointApi';
import EnhanceLiveEndpointApi from './com.diffbot.kg.enhance.openapi.api/EnhanceLiveEndpointApi';


/**
* Enhance_is_an_API_to_find_a_person_or_organization_in_the_Knowledge_Graph_using_partial_data.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DiffbotEnhanceService = require('com.diffbot.kg.enhance.openapi.invoker/index'); // See note below*.
* var xxxSvc = new DiffbotEnhanceService.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DiffbotEnhanceService.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['com.diffbot.kg.enhance.openapi.invoker/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DiffbotEnhanceService.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DiffbotEnhanceService.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module com.diffbot.kg.enhance.openapi.invoker/index
* @version v1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:com.diffbot.kg.enhance.openapi.invoker/ApiClient}
     */
    ApiClient,

    /**
     * The BulkjobAccepted model constructor.
     * @property {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobAccepted}
     */
    BulkjobAccepted,

    /**
     * The BulkjobRecoveryStatusResponse model constructor.
     * @property {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobRecoveryStatusResponse}
     */
    BulkjobRecoveryStatusResponse,

    /**
     * The BulkjobStatus model constructor.
     * @property {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatus}
     */
    BulkjobStatus,

    /**
     * The BulkjobStatusResponse model constructor.
     * @property {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatusResponse}
     */
    BulkjobStatusResponse,

    /**
     * The EnhanceResponse model constructor.
     * @property {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/EnhanceResponse}
     */
    EnhanceResponse,

    /**
     * The RequestError model constructor.
     * @property {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/RequestError}
     */
    RequestError,

    /**
    * The BulkEnhanceEndpointApi service constructor.
    * @property {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.api/BulkEnhanceEndpointApi}
    */
    BulkEnhanceEndpointApi,

    /**
    * The EnhanceLiveEndpointApi service constructor.
    * @property {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.api/EnhanceLiveEndpointApi}
    */
    EnhanceLiveEndpointApi
};