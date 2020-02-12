# DiffbotEnhanceClient.BulkEnhanceEndpointApi

All URIs are relative to *https://kg.diffbot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkjobStatus**](BulkEnhanceEndpointApi.md#bulkjobStatus) | **GET** /kg/enhance_endpoint/bulk/{bulkjobId}/status | Bulk Enhance Status Endpoint
[**enhanceBulkjob**](BulkEnhanceEndpointApi.md#enhanceBulkjob) | **POST** /kg/enhance_endpoint/bulk | Bulk Enhance Endpoint
[**pollBulkjob**](BulkEnhanceEndpointApi.md#pollBulkjob) | **GET** /kg/enhance_endpoint/bulk/{bulkjobId} | Bulk Enhance Poll Endpoint
[**stopBulkjob**](BulkEnhanceEndpointApi.md#stopBulkjob) | **GET** /kg/enhance_endpoint/bulk/{bulkjobId}/stop | Bulkjob stop



## bulkjobStatus

> BulkjobStatusResponse bulkjobStatus(bulkjobId, opts)

Bulk Enhance Status Endpoint

Get status of a bulk Enhance job

### Example

```javascript
import DiffbotEnhanceClient from 'diffbot-enhance-client';

let apiInstance = new DiffbotEnhanceClient.BulkEnhanceEndpointApi();
let bulkjobId = "bulkjobId_example"; // String | Bulkjob Id
let opts = {
  'token': "token_example" // String | Diffbot Token
};
apiInstance.bulkjobStatus(bulkjobId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkjobId** | **String**| Bulkjob Id | 
 **token** | **String**| Diffbot Token | [optional] 

### Return type

[**BulkjobStatusResponse**](BulkjobStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enhanceBulkjob

> BulkjobAccepted enhanceBulkjob(opts)

Bulk Enhance Endpoint

Enhance endpoint to find person or organization using partial data

### Example

```javascript
import DiffbotEnhanceClient from 'diffbot-enhance-client';

let apiInstance = new DiffbotEnhanceClient.BulkEnhanceEndpointApi();
let opts = {
  'token': "token_example", // String | Diffbot Token
  'tag': ["null"], // [String] | Tag
  'mode': "mode_example", // String | `mode=refresh` indicates that Diffbot will attempt to recrawl all the origins of the identified entity and reconstruct the returned entity from this refreshed data.
  'nonCanonicalFacts': "nonCanonicalFacts_example", // String | `nonCanonicalFacts=true` returns non-canonical facts.
  'jsonmode': "jsonmode_example", // String | `jsonmode=extended` returns origin information for facts.
  'rocketReachToken': "rocketReachToken_example", // String | rocketReach token
  'webhookurl': "webhookurl_example", // String | Webhook URL
  'xDiffbotRequestId': "xDiffbotRequestId_example", // String | Request UUID for tracking. If available, will be set on response.
  'requestBody': [null] // [Object] | Bulk query payload
};
apiInstance.enhanceBulkjob(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Diffbot Token | [optional] 
 **tag** | [**[String]**](String.md)| Tag | [optional] 
 **mode** | **String**| &#x60;mode&#x3D;refresh&#x60; indicates that Diffbot will attempt to recrawl all the origins of the identified entity and reconstruct the returned entity from this refreshed data. | [optional] 
 **nonCanonicalFacts** | **String**| &#x60;nonCanonicalFacts&#x3D;true&#x60; returns non-canonical facts. | [optional] 
 **jsonmode** | **String**| &#x60;jsonmode&#x3D;extended&#x60; returns origin information for facts. | [optional] 
 **rocketReachToken** | **String**| rocketReach token | [optional] 
 **webhookurl** | **String**| Webhook URL | [optional] 
 **xDiffbotRequestId** | **String**| Request UUID for tracking. If available, will be set on response. | [optional] 
 **requestBody** | [**[Object]**](Object.md)| Bulk query payload | [optional] 

### Return type

[**BulkjobAccepted**](BulkjobAccepted.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pollBulkjob

> Object pollBulkjob(bulkjobId, opts)

Bulk Enhance Poll Endpoint

Poll a bulk Enhance job

### Example

```javascript
import DiffbotEnhanceClient from 'diffbot-enhance-client';

let apiInstance = new DiffbotEnhanceClient.BulkEnhanceEndpointApi();
let bulkjobId = "bulkjobId_example"; // String | Bulkjob Id
let opts = {
  'token': "token_example", // String | Diffbot Token
  'csvmode': "csvmode_example" // String | Return results as csv
};
apiInstance.pollBulkjob(bulkjobId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkjobId** | **String**| Bulkjob Id | 
 **token** | **String**| Diffbot Token | [optional] 
 **csvmode** | **String**| Return results as csv | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopBulkjob

> BulkjobRecoveryStatusResponse stopBulkjob(bulkjobId, opts)

Bulkjob stop

Stop an incomplete job

### Example

```javascript
import DiffbotEnhanceClient from 'diffbot-enhance-client';

let apiInstance = new DiffbotEnhanceClient.BulkEnhanceEndpointApi();
let bulkjobId = "bulkjobId_example"; // String | Bulkjob Id
let opts = {
  'token': "token_example" // String | Diffbot Token
};
apiInstance.stopBulkjob(bulkjobId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkjobId** | **String**| Bulkjob Id | 
 **token** | **String**| Diffbot Token | [optional] 

### Return type

[**BulkjobRecoveryStatusResponse**](BulkjobRecoveryStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

