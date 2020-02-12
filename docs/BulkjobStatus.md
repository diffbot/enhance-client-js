# EnhanceClient.BulkjobStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **String** | Bulkjob Id | [optional] 
**message** | **String** | Bulkjob status message | [optional] 
**jobsTotal** | **Number** | Number of jobs in bulkjob | [optional] 
**jobsCompleted** | **Number** | Number of jobs completed in bulkjob. | [optional] 
**status** | **String** | Status of Bulkjob. One of {NOT_STARTED, IN_PROCESS, COMPLETE, COMPLETE_WITH_FAILURES, STOPPED, ERROR_FINALIZING, UNKNOWN} | [optional] 
**estimateRemainingTime** | **Number** | Estimated remaining time for bulkjob to complete (in seconds). &#x60;null&#x60; if job is completed or not started. | [optional] 



## Enum: StatusEnum


* `NOT_STARTED` (value: `"NOT_STARTED"`)

* `IN_PROCESS` (value: `"IN_PROCESS"`)

* `COMPLETE` (value: `"COMPLETE"`)

* `COMPLETE_WITH_FAILURES` (value: `"COMPLETE_WITH_FAILURES"`)

* `STOPPED` (value: `"STOPPED"`)

* `ERROR_FINALIZING` (value: `"ERROR_FINALIZING"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




