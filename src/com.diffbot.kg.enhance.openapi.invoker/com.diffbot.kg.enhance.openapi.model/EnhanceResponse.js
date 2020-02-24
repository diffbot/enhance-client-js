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
 * The EnhanceResponse model module.
 * @module com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/EnhanceResponse
 * @version 1.0.0
 */
class EnhanceResponse {
    /**
     * Constructs a new <code>EnhanceResponse</code>.
     * @alias module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/EnhanceResponse
     */
    constructor() { 
        
        EnhanceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnhanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/EnhanceResponse} obj Optional instance to populate.
     * @return {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/EnhanceResponse} The populated <code>EnhanceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnhanceResponse();

            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], Object);
            }
            if (data.hasOwnProperty('enhanced')) {
                obj['enhanced'] = ApiClient.convertToType(data['enhanced'], Object);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], Object);
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], Object);
            }
        }
        return obj;
    }


}

/**
 * Enhance score
 * @member {Object} score
 */
EnhanceResponse.prototype['score'] = undefined;

/**
 * Enhanced entity. Can be null if no entity was found.
 * @member {Object} enhanced
 */
EnhanceResponse.prototype['enhanced'] = undefined;

/**
 * Submitted Enhance query
 * @member {Object} query
 */
EnhanceResponse.prototype['query'] = undefined;

/**
 * Any warnings while enhancing entity
 * @member {Object} warnings
 */
EnhanceResponse.prototype['warnings'] = undefined;






export default EnhanceResponse;

