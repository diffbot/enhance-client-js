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
import BulkjobStatus from './BulkjobStatus';

/**
 * The BulkjobStatusResponse model module.
 * @module com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatusResponse
 * @version 1.0.0-rc.04
 */
class BulkjobStatusResponse {
    /**
     * Constructs a new <code>BulkjobStatusResponse</code>.
     * @alias module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatusResponse
     */
    constructor() { 
        
        BulkjobStatusResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkjobStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatusResponse} obj Optional instance to populate.
     * @return {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatusResponse} The populated <code>BulkjobStatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkjobStatusResponse();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = BulkjobStatus.constructFromObject(data['content']);
            }
        }
        return obj;
    }


}

/**
 * Bulkjob status code (same as the HTTP status code)
 * @member {Number} code
 */
BulkjobStatusResponse.prototype['code'] = undefined;

/**
 * @member {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatus} content
 */
BulkjobStatusResponse.prototype['content'] = undefined;






export default BulkjobStatusResponse;

