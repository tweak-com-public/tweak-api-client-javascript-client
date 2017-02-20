# tweakApi.TagApi

All URIs are relative to *https://apidevcdn.tweak.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagCount**](TagApi.md#tagCount) | **GET** /Tags/count | Count instances of the model matched by where from the data source.
[**tagCreate**](TagApi.md#tagCreate) | **POST** /Tags | Create a new instance of the model and persist it into the data source.
[**tagCreateChangeStreamGetTagsChangeStream**](TagApi.md#tagCreateChangeStreamGetTagsChangeStream) | **GET** /Tags/change-stream | Create a change stream.
[**tagCreateChangeStreamPostTagsChangeStream**](TagApi.md#tagCreateChangeStreamPostTagsChangeStream) | **POST** /Tags/change-stream | Create a change stream.
[**tagDeleteById**](TagApi.md#tagDeleteById) | **DELETE** /Tags/{id} | Delete a model instance by {{id}} from the data source.
[**tagExistsGetTagsidExists**](TagApi.md#tagExistsGetTagsidExists) | **GET** /Tags/{id}/exists | Check whether a model instance exists in the data source.
[**tagExistsHeadTagsid**](TagApi.md#tagExistsHeadTagsid) | **HEAD** /Tags/{id} | Check whether a model instance exists in the data source.
[**tagFind**](TagApi.md#tagFind) | **GET** /Tags | Find all instances of the model matched by filter from the data source.
[**tagFindById**](TagApi.md#tagFindById) | **GET** /Tags/{id} | Find a model instance by {{id}} from the data source.
[**tagFindOne**](TagApi.md#tagFindOne) | **GET** /Tags/findOne | Find first instance of the model matched by filter from the data source.
[**tagPrototypeUpdateAttributesPatchTagsid**](TagApi.md#tagPrototypeUpdateAttributesPatchTagsid) | **PATCH** /Tags/{id} | Patch attributes for a model instance and persist it into the data source.
[**tagPrototypeUpdateAttributesPutTagsid**](TagApi.md#tagPrototypeUpdateAttributesPutTagsid) | **PUT** /Tags/{id} | Patch attributes for a model instance and persist it into the data source.
[**tagReplaceById**](TagApi.md#tagReplaceById) | **POST** /Tags/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**tagReplaceOrCreate**](TagApi.md#tagReplaceOrCreate) | **POST** /Tags/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**tagUpdateAll**](TagApi.md#tagUpdateAll) | **POST** /Tags/update | Update instances of the model matched by {{where}} from the data source.
[**tagUpsertPatchTags**](TagApi.md#tagUpsertPatchTags) | **PATCH** /Tags | Patch an existing model instance or insert a new one into the data source.
[**tagUpsertPutTags**](TagApi.md#tagUpsertPutTags) | **PUT** /Tags | Patch an existing model instance or insert a new one into the data source.
[**tagUpsertWithWhere**](TagApi.md#tagUpsertWithWhere) | **POST** /Tags/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="tagCount"></a>
# **tagCount**
> InlineResponse200 tagCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.tagCount(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagCreate"></a>
# **tagCreate**
> Tag tagCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'data': new tweakApi.Tag() // Tag | Model instance data
};
apiInstance.tagCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Tag**](Tag.md)| Model instance data | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagCreateChangeStreamGetTagsChangeStream"></a>
# **tagCreateChangeStreamGetTagsChangeStream**
> File tagCreateChangeStreamGetTagsChangeStream(opts)

Create a change stream.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.tagCreateChangeStreamGetTagsChangeStream(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **String**|  | [optional] 

### Return type

**File**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagCreateChangeStreamPostTagsChangeStream"></a>
# **tagCreateChangeStreamPostTagsChangeStream**
> File tagCreateChangeStreamPostTagsChangeStream(opts)

Create a change stream.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.tagCreateChangeStreamPostTagsChangeStream(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **String**|  | [optional] 

### Return type

**File**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagDeleteById"></a>
# **tagDeleteById**
> Object tagDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var id = "id_example"; // String | Model id

apiInstance.tagDeleteById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 

### Return type

**Object**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagExistsGetTagsidExists"></a>
# **tagExistsGetTagsidExists**
> InlineResponse2002 tagExistsGetTagsidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var id = "id_example"; // String | Model id

apiInstance.tagExistsGetTagsidExists(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagExistsHeadTagsid"></a>
# **tagExistsHeadTagsid**
> InlineResponse2002 tagExistsHeadTagsid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var id = "id_example"; // String | Model id

apiInstance.tagExistsHeadTagsid(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagFind"></a>
# **tagFind**
> [Tag] tagFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.tagFind(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit | [optional] 

### Return type

[**[Tag]**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagFindById"></a>
# **tagFindById**
> Tag tagFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var id = "id_example"; // String | Model id

var opts = { 
  'filter': "filter_example" // String | Filter defining fields and include
};
apiInstance.tagFindById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **filter** | **String**| Filter defining fields and include | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagFindOne"></a>
# **tagFindOne**
> Tag tagFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.tagFindOne(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagPrototypeUpdateAttributesPatchTagsid"></a>
# **tagPrototypeUpdateAttributesPatchTagsid**
> Tag tagPrototypeUpdateAttributesPatchTagsid(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var id = "id_example"; // String | Tag id

var opts = { 
  'data': new tweakApi.Tag() // Tag | An object of model property name/value pairs
};
apiInstance.tagPrototypeUpdateAttributesPatchTagsid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Tag id | 
 **data** | [**Tag**](Tag.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagPrototypeUpdateAttributesPutTagsid"></a>
# **tagPrototypeUpdateAttributesPutTagsid**
> Tag tagPrototypeUpdateAttributesPutTagsid(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var id = "id_example"; // String | Tag id

var opts = { 
  'data': new tweakApi.Tag() // Tag | An object of model property name/value pairs
};
apiInstance.tagPrototypeUpdateAttributesPutTagsid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Tag id | 
 **data** | [**Tag**](Tag.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagReplaceById"></a>
# **tagReplaceById**
> Tag tagReplaceById(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new tweakApi.Tag() // Tag | Model instance data
};
apiInstance.tagReplaceById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Tag**](Tag.md)| Model instance data | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagReplaceOrCreate"></a>
# **tagReplaceOrCreate**
> Tag tagReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'data': new tweakApi.Tag() // Tag | Model instance data
};
apiInstance.tagReplaceOrCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Tag**](Tag.md)| Model instance data | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagUpdateAll"></a>
# **tagUpdateAll**
> InlineResponse2001 tagUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.Tag() // Tag | An object of model property name/value pairs
};
apiInstance.tagUpdateAll(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Tag**](Tag.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagUpsertPatchTags"></a>
# **tagUpsertPatchTags**
> Tag tagUpsertPatchTags(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'data': new tweakApi.Tag() // Tag | Model instance data
};
apiInstance.tagUpsertPatchTags(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Tag**](Tag.md)| Model instance data | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagUpsertPutTags"></a>
# **tagUpsertPutTags**
> Tag tagUpsertPutTags(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'data': new tweakApi.Tag() // Tag | Model instance data
};
apiInstance.tagUpsertPutTags(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Tag**](Tag.md)| Model instance data | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="tagUpsertWithWhere"></a>
# **tagUpsertWithWhere**
> Tag tagUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.TagApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.Tag() // Tag | An object of model property name/value pairs
};
apiInstance.tagUpsertWithWhere(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Tag**](Tag.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

