# tweakApi.CategoryApi

All URIs are relative to *https://apidevcdn.tweak.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoryCount**](CategoryApi.md#categoryCount) | **GET** /Categories/count | Count instances of the model matched by where from the data source.
[**categoryCreate**](CategoryApi.md#categoryCreate) | **POST** /Categories | Create a new instance of the model and persist it into the data source.
[**categoryCreateChangeStreamGetCategoriesChangeStream**](CategoryApi.md#categoryCreateChangeStreamGetCategoriesChangeStream) | **GET** /Categories/change-stream | Create a change stream.
[**categoryCreateChangeStreamPostCategoriesChangeStream**](CategoryApi.md#categoryCreateChangeStreamPostCategoriesChangeStream) | **POST** /Categories/change-stream | Create a change stream.
[**categoryDeleteById**](CategoryApi.md#categoryDeleteById) | **DELETE** /Categories/{id} | Delete a model instance by {{id}} from the data source.
[**categoryExistsGetCategoriesidExists**](CategoryApi.md#categoryExistsGetCategoriesidExists) | **GET** /Categories/{id}/exists | Check whether a model instance exists in the data source.
[**categoryExistsHeadCategoriesid**](CategoryApi.md#categoryExistsHeadCategoriesid) | **HEAD** /Categories/{id} | Check whether a model instance exists in the data source.
[**categoryFind**](CategoryApi.md#categoryFind) | **GET** /Categories | Find all instances of the model matched by filter from the data source.
[**categoryFindById**](CategoryApi.md#categoryFindById) | **GET** /Categories/{id} | Find a model instance by {{id}} from the data source.
[**categoryFindOne**](CategoryApi.md#categoryFindOne) | **GET** /Categories/findOne | Find first instance of the model matched by filter from the data source.
[**categoryPrototypeCountChildren**](CategoryApi.md#categoryPrototypeCountChildren) | **GET** /Categories/{id}/children/count | Counts children of Category.
[**categoryPrototypeCreateChildren**](CategoryApi.md#categoryPrototypeCreateChildren) | **POST** /Categories/{id}/children | Creates a new instance in children of this model.
[**categoryPrototypeDeleteChildren**](CategoryApi.md#categoryPrototypeDeleteChildren) | **DELETE** /Categories/{id}/children | Deletes all children of this model.
[**categoryPrototypeDestroyByIdChildren**](CategoryApi.md#categoryPrototypeDestroyByIdChildren) | **DELETE** /Categories/{id}/children/{fk} | Delete a related item by id for children.
[**categoryPrototypeFindByIdChildren**](CategoryApi.md#categoryPrototypeFindByIdChildren) | **GET** /Categories/{id}/children/{fk} | Find a related item by id for children.
[**categoryPrototypeGetChildren**](CategoryApi.md#categoryPrototypeGetChildren) | **GET** /Categories/{id}/children | Queries children of Category.
[**categoryPrototypeGetParent**](CategoryApi.md#categoryPrototypeGetParent) | **GET** /Categories/{id}/parent | Fetches belongsTo relation parent.
[**categoryPrototypeUpdateAttributesPatchCategoriesid**](CategoryApi.md#categoryPrototypeUpdateAttributesPatchCategoriesid) | **PATCH** /Categories/{id} | Patch attributes for a model instance and persist it into the data source.
[**categoryPrototypeUpdateAttributesPutCategoriesid**](CategoryApi.md#categoryPrototypeUpdateAttributesPutCategoriesid) | **PUT** /Categories/{id} | Patch attributes for a model instance and persist it into the data source.
[**categoryPrototypeUpdateByIdChildren**](CategoryApi.md#categoryPrototypeUpdateByIdChildren) | **PUT** /Categories/{id}/children/{fk} | Update a related item by id for children.
[**categoryReplaceById**](CategoryApi.md#categoryReplaceById) | **POST** /Categories/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**categoryReplaceOrCreate**](CategoryApi.md#categoryReplaceOrCreate) | **POST** /Categories/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**categoryUpdateAll**](CategoryApi.md#categoryUpdateAll) | **POST** /Categories/update | Update instances of the model matched by {{where}} from the data source.
[**categoryUpsertPatchCategories**](CategoryApi.md#categoryUpsertPatchCategories) | **PATCH** /Categories | Patch an existing model instance or insert a new one into the data source.
[**categoryUpsertPutCategories**](CategoryApi.md#categoryUpsertPutCategories) | **PUT** /Categories | Patch an existing model instance or insert a new one into the data source.
[**categoryUpsertWithWhere**](CategoryApi.md#categoryUpsertWithWhere) | **POST** /Categories/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="categoryCount"></a>
# **categoryCount**
> InlineResponse200 categoryCount(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.categoryCount(opts).then(function(data) {
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

<a name="categoryCreate"></a>
# **categoryCreate**
> Category categoryCreate(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'data': new tweakApi.Category() // Category | Model instance data
};
apiInstance.categoryCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Category**](Category.md)| Model instance data | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryCreateChangeStreamGetCategoriesChangeStream"></a>
# **categoryCreateChangeStreamGetCategoriesChangeStream**
> File categoryCreateChangeStreamGetCategoriesChangeStream(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.categoryCreateChangeStreamGetCategoriesChangeStream(opts).then(function(data) {
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

<a name="categoryCreateChangeStreamPostCategoriesChangeStream"></a>
# **categoryCreateChangeStreamPostCategoriesChangeStream**
> File categoryCreateChangeStreamPostCategoriesChangeStream(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.categoryCreateChangeStreamPostCategoriesChangeStream(opts).then(function(data) {
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

<a name="categoryDeleteById"></a>
# **categoryDeleteById**
> Object categoryDeleteById(id)

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

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Model id

apiInstance.categoryDeleteById(id).then(function(data) {
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

<a name="categoryExistsGetCategoriesidExists"></a>
# **categoryExistsGetCategoriesidExists**
> InlineResponse2002 categoryExistsGetCategoriesidExists(id)

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

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Model id

apiInstance.categoryExistsGetCategoriesidExists(id).then(function(data) {
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

<a name="categoryExistsHeadCategoriesid"></a>
# **categoryExistsHeadCategoriesid**
> InlineResponse2002 categoryExistsHeadCategoriesid(id)

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

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Model id

apiInstance.categoryExistsHeadCategoriesid(id).then(function(data) {
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

<a name="categoryFind"></a>
# **categoryFind**
> [Category] categoryFind(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.categoryFind(opts).then(function(data) {
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

[**[Category]**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryFindById"></a>
# **categoryFindById**
> Category categoryFindById(id, opts)

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

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Model id

var opts = { 
  'filter': "filter_example" // String | Filter defining fields and include
};
apiInstance.categoryFindById(id, opts).then(function(data) {
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

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryFindOne"></a>
# **categoryFindOne**
> Category categoryFindOne(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.categoryFindOne(opts).then(function(data) {
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

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeCountChildren"></a>
# **categoryPrototypeCountChildren**
> InlineResponse200 categoryPrototypeCountChildren(id, opts)

Counts children of Category.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.categoryPrototypeCountChildren(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeCreateChildren"></a>
# **categoryPrototypeCreateChildren**
> Category categoryPrototypeCreateChildren(id, opts)

Creates a new instance in children of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

var opts = { 
  'data': new tweakApi.Category() // Category | 
};
apiInstance.categoryPrototypeCreateChildren(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 
 **data** | [**Category**](Category.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeDeleteChildren"></a>
# **categoryPrototypeDeleteChildren**
> categoryPrototypeDeleteChildren(id)

Deletes all children of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

apiInstance.categoryPrototypeDeleteChildren(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeDestroyByIdChildren"></a>
# **categoryPrototypeDestroyByIdChildren**
> categoryPrototypeDestroyByIdChildren(id, fk)

Delete a related item by id for children.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

var fk = "fk_example"; // String | Foreign key for children

apiInstance.categoryPrototypeDestroyByIdChildren(id, fk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 
 **fk** | **String**| Foreign key for children | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeFindByIdChildren"></a>
# **categoryPrototypeFindByIdChildren**
> Category categoryPrototypeFindByIdChildren(id, fk)

Find a related item by id for children.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

var fk = "fk_example"; // String | Foreign key for children

apiInstance.categoryPrototypeFindByIdChildren(id, fk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 
 **fk** | **String**| Foreign key for children | 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeGetChildren"></a>
# **categoryPrototypeGetChildren**
> [Category] categoryPrototypeGetChildren(id, opts)

Queries children of Category.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

var opts = { 
  'filter': "filter_example" // String | 
};
apiInstance.categoryPrototypeGetChildren(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Category]**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeGetParent"></a>
# **categoryPrototypeGetParent**
> Category categoryPrototypeGetParent(id, opts)

Fetches belongsTo relation parent.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

var opts = { 
  'refresh': true // Boolean | 
};
apiInstance.categoryPrototypeGetParent(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeUpdateAttributesPatchCategoriesid"></a>
# **categoryPrototypeUpdateAttributesPatchCategoriesid**
> Category categoryPrototypeUpdateAttributesPatchCategoriesid(id, opts)

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

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

var opts = { 
  'data': new tweakApi.Category() // Category | An object of model property name/value pairs
};
apiInstance.categoryPrototypeUpdateAttributesPatchCategoriesid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 
 **data** | [**Category**](Category.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeUpdateAttributesPutCategoriesid"></a>
# **categoryPrototypeUpdateAttributesPutCategoriesid**
> Category categoryPrototypeUpdateAttributesPutCategoriesid(id, opts)

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

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

var opts = { 
  'data': new tweakApi.Category() // Category | An object of model property name/value pairs
};
apiInstance.categoryPrototypeUpdateAttributesPutCategoriesid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 
 **data** | [**Category**](Category.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryPrototypeUpdateByIdChildren"></a>
# **categoryPrototypeUpdateByIdChildren**
> Category categoryPrototypeUpdateByIdChildren(id, fk, opts)

Update a related item by id for children.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Category id

var fk = "fk_example"; // String | Foreign key for children

var opts = { 
  'data': new tweakApi.Category() // Category | 
};
apiInstance.categoryPrototypeUpdateByIdChildren(id, fk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category id | 
 **fk** | **String**| Foreign key for children | 
 **data** | [**Category**](Category.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryReplaceById"></a>
# **categoryReplaceById**
> Category categoryReplaceById(id, opts)

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

var apiInstance = new tweakApi.CategoryApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new tweakApi.Category() // Category | Model instance data
};
apiInstance.categoryReplaceById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Category**](Category.md)| Model instance data | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryReplaceOrCreate"></a>
# **categoryReplaceOrCreate**
> Category categoryReplaceOrCreate(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'data': new tweakApi.Category() // Category | Model instance data
};
apiInstance.categoryReplaceOrCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Category**](Category.md)| Model instance data | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryUpdateAll"></a>
# **categoryUpdateAll**
> InlineResponse2001 categoryUpdateAll(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.Category() // Category | An object of model property name/value pairs
};
apiInstance.categoryUpdateAll(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Category**](Category.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryUpsertPatchCategories"></a>
# **categoryUpsertPatchCategories**
> Category categoryUpsertPatchCategories(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'data': new tweakApi.Category() // Category | Model instance data
};
apiInstance.categoryUpsertPatchCategories(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Category**](Category.md)| Model instance data | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryUpsertPutCategories"></a>
# **categoryUpsertPutCategories**
> Category categoryUpsertPutCategories(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'data': new tweakApi.Category() // Category | Model instance data
};
apiInstance.categoryUpsertPutCategories(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Category**](Category.md)| Model instance data | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="categoryUpsertWithWhere"></a>
# **categoryUpsertWithWhere**
> Category categoryUpsertWithWhere(opts)

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

var apiInstance = new tweakApi.CategoryApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.Category() // Category | An object of model property name/value pairs
};
apiInstance.categoryUpsertWithWhere(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Category**](Category.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

