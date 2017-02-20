# tweakApi.UserApi

All URIs are relative to *https://apidevcdn.tweak.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userConfirm**](UserApi.md#userConfirm) | **GET** /Users/confirm | Confirm a user registration with email verification token.
[**userCount**](UserApi.md#userCount) | **GET** /Users/count | Count instances of the model matched by where from the data source.
[**userCreate**](UserApi.md#userCreate) | **POST** /Users | Create a new instance of the model and persist it into the data source.
[**userCreateChangeStreamGetUsersChangeStream**](UserApi.md#userCreateChangeStreamGetUsersChangeStream) | **GET** /Users/change-stream | Create a change stream.
[**userCreateChangeStreamPostUsersChangeStream**](UserApi.md#userCreateChangeStreamPostUsersChangeStream) | **POST** /Users/change-stream | Create a change stream.
[**userDeleteById**](UserApi.md#userDeleteById) | **DELETE** /Users/{id} | Delete a model instance by {{id}} from the data source.
[**userExistsGetUsersidExists**](UserApi.md#userExistsGetUsersidExists) | **GET** /Users/{id}/exists | Check whether a model instance exists in the data source.
[**userExistsHeadUsersid**](UserApi.md#userExistsHeadUsersid) | **HEAD** /Users/{id} | Check whether a model instance exists in the data source.
[**userFind**](UserApi.md#userFind) | **GET** /Users | Find all instances of the model matched by filter from the data source.
[**userFindById**](UserApi.md#userFindById) | **GET** /Users/{id} | Find a model instance by {{id}} from the data source.
[**userFindOne**](UserApi.md#userFindOne) | **GET** /Users/findOne | Find first instance of the model matched by filter from the data source.
[**userLogin**](UserApi.md#userLogin) | **POST** /Users/login | Login a user with username/email and password.
[**userLogout**](UserApi.md#userLogout) | **POST** /Users/logout | Logout a user with access token.
[**userPrototypeCountAccessTokens**](UserApi.md#userPrototypeCountAccessTokens) | **GET** /Users/{id}/accessTokens/count | Counts accessTokens of User.
[**userPrototypeCreateAccessTokens**](UserApi.md#userPrototypeCreateAccessTokens) | **POST** /Users/{id}/accessTokens | Creates a new instance in accessTokens of this model.
[**userPrototypeDeleteAccessTokens**](UserApi.md#userPrototypeDeleteAccessTokens) | **DELETE** /Users/{id}/accessTokens | Deletes all accessTokens of this model.
[**userPrototypeDestroyByIdAccessTokens**](UserApi.md#userPrototypeDestroyByIdAccessTokens) | **DELETE** /Users/{id}/accessTokens/{fk} | Delete a related item by id for accessTokens.
[**userPrototypeFindByIdAccessTokens**](UserApi.md#userPrototypeFindByIdAccessTokens) | **GET** /Users/{id}/accessTokens/{fk} | Find a related item by id for accessTokens.
[**userPrototypeGetAccessTokens**](UserApi.md#userPrototypeGetAccessTokens) | **GET** /Users/{id}/accessTokens | Queries accessTokens of User.
[**userPrototypeUpdateAttributesPatchUsersid**](UserApi.md#userPrototypeUpdateAttributesPatchUsersid) | **PATCH** /Users/{id} | Patch attributes for a model instance and persist it into the data source.
[**userPrototypeUpdateAttributesPutUsersid**](UserApi.md#userPrototypeUpdateAttributesPutUsersid) | **PUT** /Users/{id} | Patch attributes for a model instance and persist it into the data source.
[**userPrototypeUpdateByIdAccessTokens**](UserApi.md#userPrototypeUpdateByIdAccessTokens) | **PUT** /Users/{id}/accessTokens/{fk} | Update a related item by id for accessTokens.
[**userReplaceById**](UserApi.md#userReplaceById) | **POST** /Users/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**userReplaceOrCreate**](UserApi.md#userReplaceOrCreate) | **POST** /Users/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**userResetPassword**](UserApi.md#userResetPassword) | **POST** /Users/reset | Reset password for a user with email.
[**userUpdateAll**](UserApi.md#userUpdateAll) | **POST** /Users/update | Update instances of the model matched by {{where}} from the data source.
[**userUpsertPatchUsers**](UserApi.md#userUpsertPatchUsers) | **PATCH** /Users | Patch an existing model instance or insert a new one into the data source.
[**userUpsertPutUsers**](UserApi.md#userUpsertPutUsers) | **PUT** /Users | Patch an existing model instance or insert a new one into the data source.
[**userUpsertWithWhere**](UserApi.md#userUpsertWithWhere) | **POST** /Users/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="userConfirm"></a>
# **userConfirm**
> userConfirm(uid, token, opts)

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

var apiInstance = new tweakApi.UserApi();

var uid = "uid_example"; // String | 

var token = "token_example"; // String | 

var opts = { 
  'redirect': "redirect_example" // String | 
};
apiInstance.userConfirm(uid, token, opts).then(function() {
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

<a name="userCount"></a>
# **userCount**
> InlineResponse200 userCount(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.userCount(opts).then(function(data) {
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

<a name="userCreate"></a>
# **userCreate**
> User userCreate(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'data': new tweakApi.User() // User | Model instance data
};
apiInstance.userCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userCreateChangeStreamGetUsersChangeStream"></a>
# **userCreateChangeStreamGetUsersChangeStream**
> File userCreateChangeStreamGetUsersChangeStream(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.userCreateChangeStreamGetUsersChangeStream(opts).then(function(data) {
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

<a name="userCreateChangeStreamPostUsersChangeStream"></a>
# **userCreateChangeStreamPostUsersChangeStream**
> File userCreateChangeStreamPostUsersChangeStream(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'options': "options_example" // String | 
};
apiInstance.userCreateChangeStreamPostUsersChangeStream(opts).then(function(data) {
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

<a name="userDeleteById"></a>
# **userDeleteById**
> Object userDeleteById(id)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | Model id

apiInstance.userDeleteById(id).then(function(data) {
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

<a name="userExistsGetUsersidExists"></a>
# **userExistsGetUsersidExists**
> InlineResponse2002 userExistsGetUsersidExists(id)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | Model id

apiInstance.userExistsGetUsersidExists(id).then(function(data) {
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

<a name="userExistsHeadUsersid"></a>
# **userExistsHeadUsersid**
> InlineResponse2002 userExistsHeadUsersid(id)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | Model id

apiInstance.userExistsHeadUsersid(id).then(function(data) {
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

<a name="userFind"></a>
# **userFind**
> [User] userFind(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.userFind(opts).then(function(data) {
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

[**[User]**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userFindById"></a>
# **userFindById**
> User userFindById(id, opts)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | Model id

var opts = { 
  'filter': "filter_example" // String | Filter defining fields and include
};
apiInstance.userFindById(id, opts).then(function(data) {
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

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userFindOne"></a>
# **userFindOne**
> User userFindOne(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit
};
apiInstance.userFindOne(opts).then(function(data) {
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

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userLogin"></a>
# **userLogin**
> Object userLogin(credentials, opts)

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

var apiInstance = new tweakApi.UserApi();

var credentials = null; // Object | 

var opts = { 
  'include': "include_example" // String | Related objects to include in the response. See the description of return value for more details.
};
apiInstance.userLogin(credentials, opts).then(function(data) {
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

<a name="userLogout"></a>
# **userLogout**
> userLogout()

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

var apiInstance = new tweakApi.UserApi();
apiInstance.userLogout().then(function() {
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

<a name="userPrototypeCountAccessTokens"></a>
# **userPrototypeCountAccessTokens**
> InlineResponse200 userPrototypeCountAccessTokens(id, opts)

Counts accessTokens of User.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | User id

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};
apiInstance.userPrototypeCountAccessTokens(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeCreateAccessTokens"></a>
# **userPrototypeCreateAccessTokens**
> AccessToken userPrototypeCreateAccessTokens(id, opts)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | User id

var opts = { 
  'data': new tweakApi.AccessToken() // AccessToken | 
};
apiInstance.userPrototypeCreateAccessTokens(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **data** | [**AccessToken**](AccessToken.md)|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeDeleteAccessTokens"></a>
# **userPrototypeDeleteAccessTokens**
> userPrototypeDeleteAccessTokens(id)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | User id

apiInstance.userPrototypeDeleteAccessTokens(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeDestroyByIdAccessTokens"></a>
# **userPrototypeDestroyByIdAccessTokens**
> userPrototypeDestroyByIdAccessTokens(id, fk)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | User id

var fk = "fk_example"; // String | Foreign key for accessTokens

apiInstance.userPrototypeDestroyByIdAccessTokens(id, fk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **fk** | **String**| Foreign key for accessTokens | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeFindByIdAccessTokens"></a>
# **userPrototypeFindByIdAccessTokens**
> AccessToken userPrototypeFindByIdAccessTokens(id, fk)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | User id

var fk = "fk_example"; // String | Foreign key for accessTokens

apiInstance.userPrototypeFindByIdAccessTokens(id, fk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **fk** | **String**| Foreign key for accessTokens | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeGetAccessTokens"></a>
# **userPrototypeGetAccessTokens**
> [AccessToken] userPrototypeGetAccessTokens(id, opts)

Queries accessTokens of User.

### Example
```javascript
var tweakApi = require('tweak-api');
var defaultClient = tweakApi.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix = 'Token';

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | User id

var opts = { 
  'filter': "filter_example" // String | 
};
apiInstance.userPrototypeGetAccessTokens(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[AccessToken]**](AccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeUpdateAttributesPatchUsersid"></a>
# **userPrototypeUpdateAttributesPatchUsersid**
> User userPrototypeUpdateAttributesPatchUsersid(id, opts)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | User id

var opts = { 
  'data': new tweakApi.User() // User | An object of model property name/value pairs
};
apiInstance.userPrototypeUpdateAttributesPatchUsersid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **data** | [**User**](User.md)| An object of model property name/value pairs | [optional] 

### Return type

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeUpdateAttributesPutUsersid"></a>
# **userPrototypeUpdateAttributesPutUsersid**
> User userPrototypeUpdateAttributesPutUsersid(id, opts)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | User id

var opts = { 
  'data': new tweakApi.User() // User | An object of model property name/value pairs
};
apiInstance.userPrototypeUpdateAttributesPutUsersid(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **data** | [**User**](User.md)| An object of model property name/value pairs | [optional] 

### Return type

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeUpdateByIdAccessTokens"></a>
# **userPrototypeUpdateByIdAccessTokens**
> AccessToken userPrototypeUpdateByIdAccessTokens(id, fk, opts)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | User id

var fk = "fk_example"; // String | Foreign key for accessTokens

var opts = { 
  'data': new tweakApi.AccessToken() // AccessToken | 
};
apiInstance.userPrototypeUpdateByIdAccessTokens(id, fk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **fk** | **String**| Foreign key for accessTokens | 
 **data** | [**AccessToken**](AccessToken.md)|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userReplaceById"></a>
# **userReplaceById**
> User userReplaceById(id, opts)

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

var apiInstance = new tweakApi.UserApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new tweakApi.User() // User | Model instance data
};
apiInstance.userReplaceById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userReplaceOrCreate"></a>
# **userReplaceOrCreate**
> User userReplaceOrCreate(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'data': new tweakApi.User() // User | Model instance data
};
apiInstance.userReplaceOrCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userResetPassword"></a>
# **userResetPassword**
> userResetPassword(options)

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

var apiInstance = new tweakApi.UserApi();

var options = null; // Object | 

apiInstance.userResetPassword(options).then(function() {
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

<a name="userUpdateAll"></a>
# **userUpdateAll**
> InlineResponse2001 userUpdateAll(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.User() // User | An object of model property name/value pairs
};
apiInstance.userUpdateAll(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**User**](User.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userUpsertPatchUsers"></a>
# **userUpsertPatchUsers**
> User userUpsertPatchUsers(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'data': new tweakApi.User() // User | Model instance data
};
apiInstance.userUpsertPatchUsers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userUpsertPutUsers"></a>
# **userUpsertPutUsers**
> User userUpsertPutUsers(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'data': new tweakApi.User() // User | Model instance data
};
apiInstance.userUpsertPutUsers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userUpsertWithWhere"></a>
# **userUpsertWithWhere**
> User userUpsertWithWhere(opts)

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

var apiInstance = new tweakApi.UserApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new tweakApi.User() // User | An object of model property name/value pairs
};
apiInstance.userUpsertWithWhere(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**User**](User.md)| An object of model property name/value pairs | [optional] 

### Return type

[**User**](User.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

