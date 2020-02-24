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

import ApiClient from '../ApiClient';

/**
 * The RequestError model module.
 * @module com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/RequestError
 * @version 1.0.0
 */
class RequestError {
    /**
     * Constructs a new <code>RequestError</code>.
     * @alias module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/RequestError
     */
    constructor() { 
        
        RequestError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/RequestError} obj Optional instance to populate.
     * @return {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/RequestError} The populated <code>RequestError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'Boolean');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], Object);
            }
        }
        return obj;
    }


}

/**
 * Always `true`
 * @member {Boolean} error
 */
RequestError.prototype['error'] = undefined;

/**
 * Error code (same as the HTTP status code)
 * @member {Number} code
 */
RequestError.prototype['code'] = undefined;

/**
 * Error message
 * @member {String} message
 */
RequestError.prototype['message'] = undefined;

/**
 * Submitted Enhance query
 * @member {Object} query
 */
RequestError.prototype['query'] = undefined;






export default RequestError;

