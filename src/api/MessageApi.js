/**
 * tweak-api
 * Tweak API to integrate with all the Tweak services.  You can find out more about Tweak      at <a href='https://www.tweak.com'>https://www.tweak.com</a>, #tweak.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2003'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2003'));
  } else {
    // Browser globals (root is window)
    if (!root.tweakApi) {
      root.tweakApi = {};
    }
    root.tweakApi.MessageApi = factory(root.tweakApi.ApiClient, root.tweakApi.InlineResponse2003);
  }
}(this, function(ApiClient, InlineResponse2003) {
  'use strict';

  /**
   * Message service.
   * @module api/MessageApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MessageApi. 
   * @alias module:api/MessageApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.msg 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    this.messageGreet = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'msg': opts['msg']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      var accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/Messages/greet', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
