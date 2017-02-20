# tweakApi.CustomerApi

All URIs are relative to *https://apidevcdn.tweak.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerConfirm**](CustomerApi.md#customerConfirm) | **GET** /Customers/confirm | Confirm a user registration with email verification token.
[**customerCount**](CustomerApi.md#customerCount) | **GET** /Customers/count | Count instances of the model matched by where from the data source.
[**customerCreate**](CustomerApi.md#customerCreate) | **POST** /Customers | Create a new instance of the model and persist it into the data source.
[**customerCreateChangeStreamGetCustomersChangeStream**](CustomerApi.md#customerCreateChangeStreamGetCustomersChangeStream) | **GET** /Customers/change-stream | Create a change stream.
[**customerCreateChangeStreamPostCustomersChangeStream**](CustomerApi.md#customerCreateChangeStreamPostCustomersChangeStream) | **POST** /Customers/change-stream | Create a change stream.
[**customerDeleteById**](CustomerApi.md#customerDeleteById) | **DELETE** /Customers/{id} | Delete a model instance by {{id}} from the data source.
[**customerExistsGetCustomersidExists**](CustomerApi.md#customerExistsGetCustomersidExists) | **GET** /Customers/{id}/exists | Check whether a model instance exists in the data source.
[**customerExistsHeadCustomersid**](CustomerApi.md#customerExistsHeadCustomersid) | **HEAD** /Customers/{id} | Check whether a model instance exists in the data source.
[**customerFind**](CustomerApi.md#customerFind) | **GET** /Customers | Find all instances of the model matched by filter from the data source.
[**customerFindById**](CustomerApi.md#customerFindById) | **GET** /Customers/{id} | Find a model instance by {{id}} from the data source.
[**customerFindOne**](CustomerApi.md#customerFindOne) | **GET** /Customers/findOne | Find first instance of the model matched by filter from the data source.
[**customerLogin**](CustomerApi.md#customerLogin) | **POST** /Customers/login | Login a user with username/email and password.
[**customerLogout**](CustomerApi.md#customerLogout) | **POST** /Customers/logout | Logout a user with access token.
[**customerPrototypeCountAccessTokens**](CustomerApi.md#customerPrototypeCountAccessTokens) | **GET** /Customers/{id}/accessTokens/count | Counts accessTokens of Customer.
[**customerPrototypeCountDesigns**](CustomerApi.md#customerPrototypeCountDesigns) | **GET** /Customers/{id}/designs/count | Counts designs of Customer.
[**customerPrototypeCreateAccessTokens**](CustomerApi.md#customerPrototypeCreateAccessTokens) | **POST** /Customers/{id}/accessTokens | Creates a new instance in accessTokens of this model.
[**customerPrototypeCreateDesigns**](CustomerApi.md#customerPrototypeCreateDesigns) | **POST** /Customers/{id}/designs | Creates a new instance in designs of this model.
[**customerPrototypeDeleteAccessTokens**](CustomerApi.md#customerPrototypeDeleteAccessTokens) | **DELETE** /Customers/{id}/accessTokens | Deletes all accessTokens of this model.
[**customerPrototypeDeleteDesigns**](CustomerApi.md#customerPrototypeDeleteDesigns) | **DELETE** /Customers/{id}/designs | Deletes all designs of this model.
[**customerPrototypeDestroyByIdAccessTokens**](CustomerApi.md#customerPrototypeDestroyByIdAccessTokens) | **DELETE** /Customers/{id}/accessTokens/{fk} | Delete a related item by id for accessTokens.
[**customerPrototypeDestroyByIdDesigns**](CustomerApi.md#customerPrototypeDestroyByIdDesigns) | **DELETE** /Customers/{id}/designs/{fk} | Delete a related item by id for designs.
[**customerPrototypeFindByIdAccessTokens**](CustomerApi.md#customerPrototypeFindByIdAccessTokens) | **GET** /Customers/{id}/accessTokens/{fk} | Find a related item by id for accessTokens.
[**customerPrototypeFindByIdDesigns**](CustomerApi.md#customerPrototypeFindByIdDesigns) | **GET** /Customers/{id}/designs/{fk} | Find a related item by id for designs.
[**customerPrototypeGetAccessTokens**](CustomerApi.md#customerPrototypeGetAccessTokens) | **GET** /Customers/{id}/accessTokens | Queries accessTokens of Customer.
[**customerPrototypeGetDesigns**](CustomerApi.md#customerPrototypeGetDesigns) | **GET** /Customers/{id}/designs | Queries designs of Customer.
[**customerPrototypeUpdateAttributesPatchCustomersid**](CustomerApi.md#customerPrototypeUpdateAttributesPatchCustomersid) | **PATCH** /Customers/{id} | Patch attributes for a model instance and persist it into the data source.
[**customerPrototypeUpdateAttributesPutCustomersid**](CustomerApi.md#customerPrototypeUpdateAttributesPutCustomersid) | **PUT** /Customers/{id} | Patch attributes for a model instance and persist it into the data source.
[**customerPrototypeUpdateByIdAccessTokens**](CustomerApi.md#customerPrototypeUpdateByIdAccessTokens) | **PUT** /Customers/{id}/accessTokens/{fk} | Update a related item by id for accessTokens.
[**customerPrototypeUpdateByIdDesigns**](CustomerApi.md#customerPrototypeUpdateByIdDesigns) | **PUT** /Customers/{id}/designs/{fk} | Update a related item by id for designs.
[**customerReplaceById**](CustomerApi.md#customerReplaceById) | **POST** /Customers/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**customerReplaceOrCreate**](CustomerApi.md#customerReplaceOrCreate) | **POST** /Customers/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**customerResetPassword**](CustomerApi.md#customerResetPassword) | **POST** /Customers/reset | Reset password for a user with email.
[**customerUpdateAll**](CustomerApi.md#customerUpdateAll) | **POST** /Customers/update | Update instances of the model matched by {{where}} from the data source.
[**customerUpsertPatchCustomers**](CustomerApi.md#customerUpsertPatchCustomers) | **PATCH** /Customers | Patch an existing model instance or insert a new one into the data source.
[**customerUpsertPutCustomers**](CustomerApi.md#customerUpsertPutCustomers) | **PUT** /Customers | Patch an existing model instance or insert a new one into the data source.
[**customerUpsertWithWhere**](CustomerApi.md#customerUpsertWithWhere) | **POST** /Customers/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="customerConfirm"></a>
# **customerConfirm**
> customerConfirm(uid, token, opts)

Confirm a user registration with email verification token.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var uid = "uid_example"; // String | 

var token = "token_example"; // String | 

var opts = { 
  'redirect': "redirect_example" // String | 
};
apiInstance.customerConfirm(uid, token, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**|  | 
 **token** | **String**|  | 
 **redirect** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerCount"></a>
# **customerCount**
> InlineResponse200 customerCount(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.customerCount(opts).then(function(data) {
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

<a name="customerCreate"></a>
# **customerCreate**
> Customer customerCreate(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'data': new tweakApi.Customer() // Customer | Model instance data
};
apiInstance.customerCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Customer**](Customer.md)| Model instance data | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerCreateChangeStreamGetCustomersChangeStream"></a>
# **customerCreateChangeStreamGetCustomersChangeStream**
> File customerCreateChangeStreamGetCustomersChangeStream(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.customerCreateChangeStreamGetCustomersChangeStream(opts).then(function(data) {
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

<a name="customerCreateChangeStreamPostCustomersChangeStream"></a>
# **customerCreateChangeStreamPostCustomersChangeStream**
> File customerCreateChangeStreamPostCustomersChangeStream(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.customerCreateChangeStreamPostCustomersChangeStream(opts).then(function(data) {
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

<a name="customerDeleteById"></a>
# **customerDeleteById**
> Object customerDeleteById(id)

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

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Model id

apiInstance.customerDeleteById(id).then(function(data) {
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

<a name="customerExistsGetCustomersidExists"></a>
# **customerExistsGetCustomersidExists**
> InlineResponse2002 customerExistsGetCustomersidExists(id)

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

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Model id

apiInstance.customerExistsGetCustomersidExists(id).then(function(data) {
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

<a name="customerExistsHeadCustomersid"></a>
# **customerExistsHeadCustomersid**
> InlineResponse2002 customerExistsHeadCustomersid(id)

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

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Model id

apiInstance.customerExistsHeadCustomersid(id).then(function(data) {
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

<a name="customerFind"></a>
# **customerFind**
> [Customer] customerFind(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.customerFind(opts).then(function(data) {
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

[**[Customer]**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerFindById"></a>
# **customerFindById**
> Customer customerFindById(id, opts)

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

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Model id

var opts = { 
  'filter': "filter_example" // String | Filter defining fields and include
};
apiInstance.customerFindById(id, opts).then(function(data) {
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

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerFindOne"></a>
# **customerFindOne**
> Customer customerFindOne(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.customerFindOne(opts).then(function(data) {
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

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerLogin"></a>
# **customerLogin**
> Object customerLogin(credentials, opts)

Login a user with username/email and password.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var credentials = null; // Object | 

var opts = { 
  'include': "include_example" // String | Related objects to include in the response. See the description of return value for more details.
};
apiInstance.customerLogin(credentials, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | **Object**|  | 
 **include** | **String**| Related objects to include in the response. See the description of return value for more details. | [optional] 

### Return type

**Object**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerLogout"></a>
# **customerLogout**
> customerLogout()

Logout a user with access token.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();
apiInstance.customerLogout().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeCountAccessTokens"></a>
# **customerPrototypeCountAccessTokens**
> InlineResponse200 customerPrototypeCountAccessTokens(id, opts)

Counts accessTokens of Customer.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.customerPrototypeCountAccessTokens(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeCountDesigns"></a>
# **customerPrototypeCountDesigns**
> InlineResponse200 customerPrototypeCountDesigns(id, opts)

Counts designs of Customer.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.customerPrototypeCountDesigns(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeCreateAccessTokens"></a>
# **customerPrototypeCreateAccessTokens**
> AccessToken customerPrototypeCreateAccessTokens(id, opts)

Creates a new instance in accessTokens of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var opts = { 
  'data': new tweakApi.AccessToken() // AccessToken | 
};
apiInstance.customerPrototypeCreateAccessTokens(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **data** | [**AccessToken**](AccessToken.md)|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeCreateDesigns"></a>
# **customerPrototypeCreateDesigns**
> Design customerPrototypeCreateDesigns(id, opts)

Creates a new instance in designs of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var opts = { 
  'data': new tweakApi.Design() // Design | 
};
apiInstance.customerPrototypeCreateDesigns(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **data** | [**Design**](Design.md)|  | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeDeleteAccessTokens"></a>
# **customerPrototypeDeleteAccessTokens**
> customerPrototypeDeleteAccessTokens(id)

Deletes all accessTokens of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

apiInstance.customerPrototypeDeleteAccessTokens(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeDeleteDesigns"></a>
# **customerPrototypeDeleteDesigns**
> customerPrototypeDeleteDesigns(id)

Deletes all designs of this model.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

apiInstance.customerPrototypeDeleteDesigns(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeDestroyByIdAccessTokens"></a>
# **customerPrototypeDestroyByIdAccessTokens**
> customerPrototypeDestroyByIdAccessTokens(id, fk)

Delete a related item by id for accessTokens.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var fk = "fk_example"; // String | Foreign key for accessTokens

apiInstance.customerPrototypeDestroyByIdAccessTokens(id, fk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **fk** | **String**| Foreign key for accessTokens | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeDestroyByIdDesigns"></a>
# **customerPrototypeDestroyByIdDesigns**
> customerPrototypeDestroyByIdDesigns(id, fk)

Delete a related item by id for designs.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var fk = "fk_example"; // String | Foreign key for designs

apiInstance.customerPrototypeDestroyByIdDesigns(id, fk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **fk** | **String**| Foreign key for designs | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeFindByIdAccessTokens"></a>
# **customerPrototypeFindByIdAccessTokens**
> AccessToken customerPrototypeFindByIdAccessTokens(id, fk)

Find a related item by id for accessTokens.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var fk = "fk_example"; // String | Foreign key for accessTokens

apiInstance.customerPrototypeFindByIdAccessTokens(id, fk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **fk** | **String**| Foreign key for accessTokens | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeFindByIdDesigns"></a>
# **customerPrototypeFindByIdDesigns**
> Design customerPrototypeFindByIdDesigns(id, fk)

Find a related item by id for designs.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var fk = "fk_example"; // String | Foreign key for designs

apiInstance.customerPrototypeFindByIdDesigns(id, fk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **fk** | **String**| Foreign key for designs | 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeGetAccessTokens"></a>
# **customerPrototypeGetAccessTokens**
> [AccessToken] customerPrototypeGetAccessTokens(id, opts)

Queries accessTokens of Customer.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var opts = { 
  'filter': "filter_example" // String | 
};
apiInstance.customerPrototypeGetAccessTokens(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[AccessToken]**](AccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeGetDesigns"></a>
# **customerPrototypeGetDesigns**
> [Design] customerPrototypeGetDesigns(id, opts)

Queries designs of Customer.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var opts = { 
  'filter': "filter_example" // String | 
};
apiInstance.customerPrototypeGetDesigns(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Design]**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeUpdateAttributesPatchCustomersid"></a>
# **customerPrototypeUpdateAttributesPatchCustomersid**
> Customer customerPrototypeUpdateAttributesPatchCustomersid(id, opts)

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

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var opts = { 
  'data': new tweakApi.Customer() // Customer | An object of model property name/value pairs
};
apiInstance.customerPrototypeUpdateAttributesPatchCustomersid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **data** | [**Customer**](Customer.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeUpdateAttributesPutCustomersid"></a>
# **customerPrototypeUpdateAttributesPutCustomersid**
> Customer customerPrototypeUpdateAttributesPutCustomersid(id, opts)

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

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var opts = { 
  'data': new tweakApi.Customer() // Customer | An object of model property name/value pairs
};
apiInstance.customerPrototypeUpdateAttributesPutCustomersid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **data** | [**Customer**](Customer.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeUpdateByIdAccessTokens"></a>
# **customerPrototypeUpdateByIdAccessTokens**
> AccessToken customerPrototypeUpdateByIdAccessTokens(id, fk, opts)

Update a related item by id for accessTokens.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var fk = "fk_example"; // String | Foreign key for accessTokens

var opts = { 
  'data': new tweakApi.AccessToken() // AccessToken | 
};
apiInstance.customerPrototypeUpdateByIdAccessTokens(id, fk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **fk** | **String**| Foreign key for accessTokens | 
 **data** | [**AccessToken**](AccessToken.md)|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerPrototypeUpdateByIdDesigns"></a>
# **customerPrototypeUpdateByIdDesigns**
> Design customerPrototypeUpdateByIdDesigns(id, fk, opts)

Update a related item by id for designs.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Customer id

var fk = "fk_example"; // String | Foreign key for designs

var opts = { 
  'data': new tweakApi.Design() // Design | 
};
apiInstance.customerPrototypeUpdateByIdDesigns(id, fk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer id | 
 **fk** | **String**| Foreign key for designs | 
 **data** | [**Design**](Design.md)|  | [optional] 

### Return type

[**Design**](Design.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerReplaceById"></a>
# **customerReplaceById**
> Customer customerReplaceById(id, opts)

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

var apiInstance = new tweakApi.CustomerApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new tweakApi.Customer() // Customer | Model instance data
};
apiInstance.customerReplaceById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Customer**](Customer.md)| Model instance data | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerReplaceOrCreate"></a>
# **customerReplaceOrCreate**
> Customer customerReplaceOrCreate(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'data': new tweakApi.Customer() // Customer | Model instance data
};
apiInstance.customerReplaceOrCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Customer**](Customer.md)| Model instance data | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerResetPassword"></a>
# **customerResetPassword**
> customerResetPassword(options)

Reset password for a user with email.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.CustomerApi();

var options = null; // Object | 

apiInstance.customerResetPassword(options).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerUpdateAll"></a>
# **customerUpdateAll**
> InlineResponse2001 customerUpdateAll(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.Customer() // Customer | An object of model property name/value pairs
};
apiInstance.customerUpdateAll(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Customer**](Customer.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerUpsertPatchCustomers"></a>
# **customerUpsertPatchCustomers**
> Customer customerUpsertPatchCustomers(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'data': new tweakApi.Customer() // Customer | Model instance data
};
apiInstance.customerUpsertPatchCustomers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Customer**](Customer.md)| Model instance data | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerUpsertPutCustomers"></a>
# **customerUpsertPutCustomers**
> Customer customerUpsertPutCustomers(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'data': new tweakApi.Customer() // Customer | Model instance data
};
apiInstance.customerUpsertPutCustomers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Customer**](Customer.md)| Model instance data | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="customerUpsertWithWhere"></a>
# **customerUpsertWithWhere**
> Customer customerUpsertWithWhere(opts)

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

var apiInstance = new tweakApi.CustomerApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.Customer() // Customer | An object of model property name/value pairs
};
apiInstance.customerUpsertWithWhere(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Customer**](Customer.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

