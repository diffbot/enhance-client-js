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
 * The BulkjobStatus model module.
 * @module com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatus
 * @version 1.0.0-rc.05
 */
class BulkjobStatus {
    /**
     * Constructs a new <code>BulkjobStatus</code>.
     * Bulkjob status
     * @alias module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatus
     */
    constructor() { 
        
        BulkjobStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkjobStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatus} obj Optional instance to populate.
     * @return {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatus} The populated <code>BulkjobStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkjobStatus();

            if (data.hasOwnProperty('job_id')) {
                obj['job_id'] = ApiClient.convertToType(data['job_id'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('jobs_total')) {
                obj['jobs_total'] = ApiClient.convertToType(data['jobs_total'], 'Number');
            }
            if (data.hasOwnProperty('jobs_completed')) {
                obj['jobs_completed'] = ApiClient.convertToType(data['jobs_completed'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('estimate_remaining_time')) {
                obj['estimate_remaining_time'] = ApiClient.convertToType(data['estimate_remaining_time'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Bulkjob Id
 * @member {String} job_id
 */
BulkjobStatus.prototype['job_id'] = undefined;

/**
 * Bulkjob status message
 * @member {String} message
 */
BulkjobStatus.prototype['message'] = undefined;

/**
 * Number of jobs in bulkjob
 * @member {Number} jobs_total
 */
BulkjobStatus.prototype['jobs_total'] = undefined;

/**
 * Number of jobs completed in bulkjob.
 * @member {Number} jobs_completed
 */
BulkjobStatus.prototype['jobs_completed'] = undefined;

/**
 * Status of Bulkjob. One of {NOT_STARTED, IN_PROCESS, COMPLETE, COMPLETE_WITH_FAILURES, STOPPED, ERROR_FINALIZING, UNKNOWN}
 * @member {module:com.diffbot.kg.enhance.openapi.invoker/com.diffbot.kg.enhance.openapi.model/BulkjobStatus.StatusEnum} status
 */
BulkjobStatus.prototype['status'] = undefined;

/**
 * Estimated remaining time for bulkjob to complete (in seconds). `null` if job is completed or not started.
 * @member {Number} estimate_remaining_time
 */
BulkjobStatus.prototype['estimate_remaining_time'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
BulkjobStatus['StatusEnum'] = {

    /**
     * value: "NOT_STARTED"
     * @const
     */
    "NOT_STARTED": "NOT_STARTED",

    /**
     * value: "IN_PROCESS"
     * @const
     */
    "IN_PROCESS": "IN_PROCESS",

    /**
     * value: "COMPLETE"
     * @const
     */
    "COMPLETE": "COMPLETE",

    /**
     * value: "COMPLETE_WITH_FAILURES"
     * @const
     */
    "COMPLETE_WITH_FAILURES": "COMPLETE_WITH_FAILURES",

    /**
     * value: "STOPPED"
     * @const
     */
    "STOPPED": "STOPPED",

    /**
     * value: "ERROR_FINALIZING"
     * @const
     */
    "ERROR_FINALIZING": "ERROR_FINALIZING",

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"
};



export default BulkjobStatus;

