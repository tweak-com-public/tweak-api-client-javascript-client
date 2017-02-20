# tweakApi.MessageApi

All URIs are relative to *https://apidevcdn.tweak.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messageGreet**](MessageApi.md#messageGreet) | **GET** /Messages/greet | 


<a name="messageGreet"></a>
# **messageGreet**
> InlineResponse2003 messageGreet(opts)



### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.MessageApi();

var opts = { 
  'msg': "msg_example" // String | 
};
apiInstance.messageGreet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **msg** | **String**|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

