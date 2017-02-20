# tweakApi.DesignApi

All URIs are relative to *https://apidevcdn.tweak.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**designCount**](DesignApi.md#designCount) | **GET** /Designs/count | Count instances of the model matched by where from the data source.
[**designCreate**](DesignApi.md#designCreate) | **POST** /Designs | Create a new instance of the model and persist it into the data source.
[**designCreateChangeStreamGetDesignsChangeStream**](DesignApi.md#designCreateChangeStreamGetDesignsChangeStream) | **GET** /Designs/change-stream | Create a change stream.
[**designCreateChangeStreamPostDesignsChangeStream**](DesignApi.md#designCreateChangeStreamPostDesignsChangeStream) | **POST** /Designs/change-stream | Create a change stream.
[**designDeleteById**](DesignApi.md#designDeleteById) | **DELETE** /Designs/{id} | Delete a model instance by {{id}} from the data source.
[**designExistsGetDesignsidExists**](DesignApi.md#designExistsGetDesignsidExists) | **GET** /Designs/{id}/exists | Check whether a model instance exists in the data source.
[**designExistsHeadDesignsid**](DesignApi.md#designExistsHeadDesignsid) | **HEAD** /Designs/{id} | Check whether a model instance exists in the data source.
[**designFind**](DesignApi.md#designFind) | **GET** /Designs | Find all instances of the model matched by filter from the data source.
[**designFindById**](DesignApi.md#designFindById) | **GET** /Designs/{id} | Find a model instance by {{id}} from the data source.
[**designFindOne**](DesignApi.md#designFindOne) | **GET** /Designs/findOne | Find first instance of the model matched by filter from the data source.
[**designPrototypeCountCategories**](DesignApi.md#designPrototypeCountCategories) | **GET** /Designs/{id}/categories/count | Counts categories of Design.
[**designPrototypeCountTags**](DesignApi.md#designPrototypeCountTags) | **GET** /Designs/{id}/tags/count | Counts tags of Design.
[**designPrototypeCreateCategories**](DesignApi.md#designPrototypeCreateCategories) | **POST** /Designs/{id}/categories | Creates a new instance in categories of this model.
[**designPrototypeCreateTags**](DesignApi.md#designPrototypeCreateTags) | **POST** /Designs/{id}/tags | Creates a new instance in tags of this model.
[**designPrototypeDeleteCategories**](DesignApi.md#designPrototypeDeleteCategories) | **DELETE** /Designs/{id}/categories | Deletes all categories of this model.
[**designPrototypeDeleteTags**](DesignApi.md#designPrototypeDeleteTags) | **DELETE** /Designs/{id}/tags | Deletes all tags of this model.
[**designPrototypeDestroyByIdCategories**](DesignApi.md#designPrototypeDestroyByIdCategories) | **DELETE** /Designs/{id}/categories/{fk} | Delete a related item by id for categories.
[**designPrototypeDestroyByIdTags**](DesignApi.md#designPrototypeDestroyByIdTags) | **DELETE** /Designs/{id}/tags/{fk} | Delete a related item by id for tags.
[**designPrototypeFindByIdCategories**](DesignApi.md#designPrototypeFindByIdCategories) | **GET** /Designs/{id}/categories/{fk} | Find a related item by id for categories.
[**designPrototypeFindByIdTags**](DesignApi.md#designPrototypeFindByIdTags) | **GET** /Designs/{id}/tags/{fk} | Find a related item by id for tags.
[**designPrototypeGetCategories**](DesignApi.md#designPrototypeGetCategories) | **GET** /Designs/{id}/categories | Queries categories of Design.
[**designPrototypeGetCustomer**](DesignApi.md#designPrototypeGetCustomer) | **GET** /Designs/{id}/customer | Fetches belongsTo relation customer.
[**designPrototypeGetTags**](DesignApi.md#designPrototypeGetTags) | **GET** /Designs/{id}/tags | Queries tags of Design.
[**designPrototypeUpdateAttributesPatchDesignsid**](DesignApi.md#designPrototypeUpdateAttributesPatchDesignsid) | **PATCH** /Designs/{id} | Patch attributes for a model instance and persist it into the data source.
[**designPrototypeUpdateAttributesPutDesignsid**](DesignApi.md#designPrototypeUpdateAttributesPutDesignsid) | **PUT** /Designs/{id} | Patch attributes for a model instance and persist it into the data source.
[**designPrototypeUpdateByIdCategories**](DesignApi.md#designPrototypeUpdateByIdCategories) | **PUT** /Designs/{id}/categories/{fk} | Update a related item by id for categories.
[**designPrototypeUpdateByIdTags**](DesignApi.md#designPrototypeUpdateByIdTags) | **PUT** /Designs/{id}/tags/{fk} | Update a related item by id for tags.
[**designReplaceById**](DesignApi.md#designReplaceById) | **POST** /Designs/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**designReplaceOrCreate**](DesignApi.md#designReplaceOrCreate) | **POST** /Designs/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**designUpdateAll**](DesignApi.md#designUpdateAll) | **POST** /Designs/update | Update instances of the model matched by {{where}} from the data source.
[**designUpsertPatchDesigns**](DesignApi.md#designUpsertPatchDesigns) | **PATCH** /Designs | Patch an existing model instance or insert a new one into the data source.
[**designUpsertPutDesigns**](DesignApi.md#designUpsertPutDesigns) | **PUT** /Designs | Patch an existing model instance or insert a new one into the data source.
[**designUpsertWithWhere**](DesignApi.md#designUpsertWithWhere) | **POST** /Designs/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="designCount"></a>
# **designCount**
> InlineResponse200 designCount(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.designCount(opts).then(function(data) {
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

<a name="designCreate"></a>
# **designCreate**
> Design designCreate(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'data': new tweakApi.Design() // Design | Model instance data
};
apiInstance.designCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Design**](Design.md)| Model instance data | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designCreateChangeStreamGetDesignsChangeStream"></a>
# **designCreateChangeStreamGetDesignsChangeStream**
> File designCreateChangeStreamGetDesignsChangeStream(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.designCreateChangeStreamGetDesignsChangeStream(opts).then(function(data) {
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

<a name="designCreateChangeStreamPostDesignsChangeStream"></a>
# **designCreateChangeStreamPostDesignsChangeStream**
> File designCreateChangeStreamPostDesignsChangeStream(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.designCreateChangeStreamPostDesignsChangeStream(opts).then(function(data) {
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

<a name="designDeleteById"></a>
# **designDeleteById**
> Object designDeleteById(id)

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

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Model id

apiInstance.designDeleteById(id).then(function(data) {
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

<a name="designExistsGetDesignsidExists"></a>
# **designExistsGetDesignsidExists**
> InlineResponse2002 designExistsGetDesignsidExists(id)

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

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Model id

apiInstance.designExistsGetDesignsidExists(id).then(function(data) {
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

<a name="designExistsHeadDesignsid"></a>
# **designExistsHeadDesignsid**
> InlineResponse2002 designExistsHeadDesignsid(id)

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

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Model id

apiInstance.designExistsHeadDesignsid(id).then(function(data) {
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

<a name="designFind"></a>
# **designFind**
> [Design] designFind(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.designFind(opts).then(function(data) {
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

[**[Design]**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designFindById"></a>
# **designFindById**
> Design designFindById(id, opts)

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

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Model id

var opts = { 
  'filter': "filter_example" // String | Filter defining fields and include
};
apiInstance.designFindById(id, opts).then(function(data) {
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

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designFindOne"></a>
# **designFindOne**
> Design designFindOne(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.designFindOne(opts).then(function(data) {
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

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeCountCategories"></a>
# **designPrototypeCountCategories**
> InlineResponse200 designPrototypeCountCategories(id, opts)

Counts categories of Design.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.designPrototypeCountCategories(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeCountTags"></a>
# **designPrototypeCountTags**
> InlineResponse200 designPrototypeCountTags(id, opts)

Counts tags of Design.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.designPrototypeCountTags(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeCreateCategories"></a>
# **designPrototypeCreateCategories**
> Category designPrototypeCreateCategories(id, opts)

Creates a new instance in categories of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var opts = { 
  'data': new tweakApi.Category() // Category | 
};
apiInstance.designPrototypeCreateCategories(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **data** | [**Category**](Category.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeCreateTags"></a>
# **designPrototypeCreateTags**
> Tag designPrototypeCreateTags(id, opts)

Creates a new instance in tags of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var opts = { 
  'data': new tweakApi.Tag() // Tag | 
};
apiInstance.designPrototypeCreateTags(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **data** | [**Tag**](Tag.md)|  | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeDeleteCategories"></a>
# **designPrototypeDeleteCategories**
> designPrototypeDeleteCategories(id)

Deletes all categories of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

apiInstance.designPrototypeDeleteCategories(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeDeleteTags"></a>
# **designPrototypeDeleteTags**
> designPrototypeDeleteTags(id)

Deletes all tags of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

apiInstance.designPrototypeDeleteTags(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeDestroyByIdCategories"></a>
# **designPrototypeDestroyByIdCategories**
> designPrototypeDestroyByIdCategories(id, fk)

Delete a related item by id for categories.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var fk = "fk_example"; // String | Foreign key for categories

apiInstance.designPrototypeDestroyByIdCategories(id, fk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **fk** | **String**| Foreign key for categories | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeDestroyByIdTags"></a>
# **designPrototypeDestroyByIdTags**
> designPrototypeDestroyByIdTags(id, fk)

Delete a related item by id for tags.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var fk = "fk_example"; // String | Foreign key for tags

apiInstance.designPrototypeDestroyByIdTags(id, fk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **fk** | **String**| Foreign key for tags | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeFindByIdCategories"></a>
# **designPrototypeFindByIdCategories**
> Category designPrototypeFindByIdCategories(id, fk)

Find a related item by id for categories.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var fk = "fk_example"; // String | Foreign key for categories

apiInstance.designPrototypeFindByIdCategories(id, fk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **fk** | **String**| Foreign key for categories | 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeFindByIdTags"></a>
# **designPrototypeFindByIdTags**
> Tag designPrototypeFindByIdTags(id, fk)

Find a related item by id for tags.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var fk = "fk_example"; // String | Foreign key for tags

apiInstance.designPrototypeFindByIdTags(id, fk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **fk** | **String**| Foreign key for tags | 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeGetCategories"></a>
# **designPrototypeGetCategories**
> [Category] designPrototypeGetCategories(id, opts)

Queries categories of Design.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var opts = { 
  'filter': "filter_example" // String | 
};
apiInstance.designPrototypeGetCategories(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Category]**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeGetCustomer"></a>
# **designPrototypeGetCustomer**
> Customer designPrototypeGetCustomer(id, opts)

Fetches belongsTo relation customer.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var opts = { 
  'refresh': true // Boolean | 
};
apiInstance.designPrototypeGetCustomer(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeGetTags"></a>
# **designPrototypeGetTags**
> [Tag] designPrototypeGetTags(id, opts)

Queries tags of Design.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var opts = { 
  'filter': "filter_example" // String | 
};
apiInstance.designPrototypeGetTags(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Tag]**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeUpdateAttributesPatchDesignsid"></a>
# **designPrototypeUpdateAttributesPatchDesignsid**
> Design designPrototypeUpdateAttributesPatchDesignsid(id, opts)

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

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var opts = { 
  'data': new tweakApi.Design() // Design | An object of model property name/value pairs
};
apiInstance.designPrototypeUpdateAttributesPatchDesignsid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **data** | [**Design**](Design.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeUpdateAttributesPutDesignsid"></a>
# **designPrototypeUpdateAttributesPutDesignsid**
> Design designPrototypeUpdateAttributesPutDesignsid(id, opts)

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

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var opts = { 
  'data': new tweakApi.Design() // Design | An object of model property name/value pairs
};
apiInstance.designPrototypeUpdateAttributesPutDesignsid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **data** | [**Design**](Design.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeUpdateByIdCategories"></a>
# **designPrototypeUpdateByIdCategories**
> Category designPrototypeUpdateByIdCategories(id, fk, opts)

Update a related item by id for categories.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var fk = "fk_example"; // String | Foreign key for categories

var opts = { 
  'data': new tweakApi.Category() // Category | 
};
apiInstance.designPrototypeUpdateByIdCategories(id, fk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **fk** | **String**| Foreign key for categories | 
 **data** | [**Category**](Category.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designPrototypeUpdateByIdTags"></a>
# **designPrototypeUpdateByIdTags**
> Tag designPrototypeUpdateByIdTags(id, fk, opts)

Update a related item by id for tags.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Design id

var fk = "fk_example"; // String | Foreign key for tags

var opts = { 
  'data': new tweakApi.Tag() // Tag | 
};
apiInstance.designPrototypeUpdateByIdTags(id, fk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Design id | 
 **fk** | **String**| Foreign key for tags | 
 **data** | [**Tag**](Tag.md)|  | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designReplaceById"></a>
# **designReplaceById**
> Design designReplaceById(id, opts)

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

var apiInstance = new tweakApi.DesignApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new tweakApi.Design() // Design | Model instance data
};
apiInstance.designReplaceById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Design**](Design.md)| Model instance data | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designReplaceOrCreate"></a>
# **designReplaceOrCreate**
> Design designReplaceOrCreate(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'data': new tweakApi.Design() // Design | Model instance data
};
apiInstance.designReplaceOrCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Design**](Design.md)| Model instance data | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designUpdateAll"></a>
# **designUpdateAll**
> InlineResponse2001 designUpdateAll(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.Design() // Design | An object of model property name/value pairs
};
apiInstance.designUpdateAll(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Design**](Design.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designUpsertPatchDesigns"></a>
# **designUpsertPatchDesigns**
> Design designUpsertPatchDesigns(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'data': new tweakApi.Design() // Design | Model instance data
};
apiInstance.designUpsertPatchDesigns(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Design**](Design.md)| Model instance data | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designUpsertPutDesigns"></a>
# **designUpsertPutDesigns**
> Design designUpsertPutDesigns(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'data': new tweakApi.Design() // Design | Model instance data
};
apiInstance.designUpsertPutDesigns(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Design**](Design.md)| Model instance data | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="designUpsertWithWhere"></a>
# **designUpsertWithWhere**
> Design designUpsertWithWhere(opts)

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

var apiInstance = new tweakApi.DesignApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.Design() // Design | An object of model property name/value pairs
};
apiInstance.designUpsertWithWhere(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Design**](Design.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

