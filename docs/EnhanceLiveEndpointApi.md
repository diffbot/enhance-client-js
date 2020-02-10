# @DiffbotEnhanceClient.EnhanceLiveEndpointApi

All URIs are relative to *https://kg.diffbot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enhance**](EnhanceLiveEndpointApi.md#enhance) | **GET** /kg/enhance_endpoint | Live Enhance Endpoint



## enhance

> EnhanceResponse enhance(opts)

Live Enhance Endpoint

Enhance endpoint to find person or organization using partial data

### Example

```javascript
import @DiffbotEnhanceClient from '@diffbot/enhance-client';

let apiInstance = new @DiffbotEnhanceClient.EnhanceLiveEndpointApi();
let opts = {
  'token': "token_example", // String | Diffbot Token
  'type': "type_example", // String | Diffbot entity type
  'id': "id_example", // String | DiffbotId of entity to enhance. Parameter can be used with types `Person` and `Organization`
  'name': "name_example", // String | Name of the entity to enhance. Parameter can be used with types `Person` and `Organization`
  'url': "url_example", // String | Origin or homepage URI of entity to enhance. Parameter can be used with types `Person` and `Organization`
  'phone': "phone_example", // String | Phone of the entity to enhance. Parameter can be used with types `Person` and `Organization`
  'email': "email_example", // String | Email of the entity to enhance. Parameter can be used only with type `Person`
  'description': "description_example", // String | Description of the entity to enhance. Parameter can be used with types `Person` and `Organization`
  'employer': "employer_example", // String | Employer of the entity to enhance. Parameter can be used only with type `Person`
  'title': "title_example", // String | Title of the entity to enhance. Parameter can be used only with type `Person`
  'school': "school_example", // String | School of the entity to enhance. Parameter can be used only with type `Person`
  'location': "location_example", // String | Location of the entity to enhance. Parameter can be used with types `Person` and `Organization`
  'mode': "mode_example", // String | `mode=refresh` indicates that Diffbot will attempt to recrawl all the origins of the identified entity and reconstruct the returned entity from this refreshed data.
  'nonCanonicalFacts': "nonCanonicalFacts_example", // String | `nonCanonicalFacts=true` returns non-canonical facts.
  'jsonmode': "jsonmode_example", // String | `jsonmode=extended` returns origin information for facts.
  'leadIQToken': "leadIQToken_example", // String | leadIQ token
  'rocketReachToken': "rocketReachToken_example", // String | rocketReach token
  'xDiffbotRequestId': "xDiffbotRequestId_example" // String | Request UUID for tracking. If available, will be set on response.
};
apiInstance.enhance(opts, (error, data, response) => {
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
 **type** | **String**| Diffbot entity type | [optional] 
 **id** | **String**| DiffbotId of entity to enhance. Parameter can be used with types &#x60;Person&#x60; and &#x60;Organization&#x60; | [optional] 
 **name** | **String**| Name of the entity to enhance. Parameter can be used with types &#x60;Person&#x60; and &#x60;Organization&#x60; | [optional] 
 **url** | **String**| Origin or homepage URI of entity to enhance. Parameter can be used with types &#x60;Person&#x60; and &#x60;Organization&#x60; | [optional] 
 **phone** | **String**| Phone of the entity to enhance. Parameter can be used with types &#x60;Person&#x60; and &#x60;Organization&#x60; | [optional] 
 **email** | **String**| Email of the entity to enhance. Parameter can be used only with type &#x60;Person&#x60; | [optional] 
 **description** | **String**| Description of the entity to enhance. Parameter can be used with types &#x60;Person&#x60; and &#x60;Organization&#x60; | [optional] 
 **employer** | **String**| Employer of the entity to enhance. Parameter can be used only with type &#x60;Person&#x60; | [optional] 
 **title** | **String**| Title of the entity to enhance. Parameter can be used only with type &#x60;Person&#x60; | [optional] 
 **school** | **String**| School of the entity to enhance. Parameter can be used only with type &#x60;Person&#x60; | [optional] 
 **location** | **String**| Location of the entity to enhance. Parameter can be used with types &#x60;Person&#x60; and &#x60;Organization&#x60; | [optional] 
 **mode** | **String**| &#x60;mode&#x3D;refresh&#x60; indicates that Diffbot will attempt to recrawl all the origins of the identified entity and reconstruct the returned entity from this refreshed data. | [optional] 
 **nonCanonicalFacts** | **String**| &#x60;nonCanonicalFacts&#x3D;true&#x60; returns non-canonical facts. | [optional] 
 **jsonmode** | **String**| &#x60;jsonmode&#x3D;extended&#x60; returns origin information for facts. | [optional] 
 **leadIQToken** | **String**| leadIQ token | [optional] 
 **rocketReachToken** | **String**| rocketReach token | [optional] 
 **xDiffbotRequestId** | **String**| Request UUID for tracking. If available, will be set on response. | [optional] 

### Return type

[**EnhanceResponse**](EnhanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

