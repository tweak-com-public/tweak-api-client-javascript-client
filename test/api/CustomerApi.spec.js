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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.tweakApi);
  }
}(this, function(expect, tweakApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new tweakApi.CustomerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CustomerApi', function() {
    describe('customerConfirm', function() {
      it('should call customerConfirm successfully', function(done) {
        //uncomment below and update the code to test customerConfirm
        //instance.customerConfirm(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerCount', function() {
      it('should call customerCount successfully', function(done) {
        //uncomment below and update the code to test customerCount
        //instance.customerCount(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerCreate', function() {
      it('should call customerCreate successfully', function(done) {
        //uncomment below and update the code to test customerCreate
        //instance.customerCreate(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerCreateChangeStreamGetCustomersChangeStream', function() {
      it('should call customerCreateChangeStreamGetCustomersChangeStream successfully', function(done) {
        //uncomment below and update the code to test customerCreateChangeStreamGetCustomersChangeStream
        //instance.customerCreateChangeStreamGetCustomersChangeStream(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerCreateChangeStreamPostCustomersChangeStream', function() {
      it('should call customerCreateChangeStreamPostCustomersChangeStream successfully', function(done) {
        //uncomment below and update the code to test customerCreateChangeStreamPostCustomersChangeStream
        //instance.customerCreateChangeStreamPostCustomersChangeStream(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerDeleteById', function() {
      it('should call customerDeleteById successfully', function(done) {
        //uncomment below and update the code to test customerDeleteById
        //instance.customerDeleteById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerExistsGetCustomersidExists', function() {
      it('should call customerExistsGetCustomersidExists successfully', function(done) {
        //uncomment below and update the code to test customerExistsGetCustomersidExists
        //instance.customerExistsGetCustomersidExists(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerExistsHeadCustomersid', function() {
      it('should call customerExistsHeadCustomersid successfully', function(done) {
        //uncomment below and update the code to test customerExistsHeadCustomersid
        //instance.customerExistsHeadCustomersid(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerFind', function() {
      it('should call customerFind successfully', function(done) {
        //uncomment below and update the code to test customerFind
        //instance.customerFind(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerFindById', function() {
      it('should call customerFindById successfully', function(done) {
        //uncomment below and update the code to test customerFindById
        //instance.customerFindById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerFindOne', function() {
      it('should call customerFindOne successfully', function(done) {
        //uncomment below and update the code to test customerFindOne
        //instance.customerFindOne(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerLogin', function() {
      it('should call customerLogin successfully', function(done) {
        //uncomment below and update the code to test customerLogin
        //instance.customerLogin(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerLogout', function() {
      it('should call customerLogout successfully', function(done) {
        //uncomment below and update the code to test customerLogout
        //instance.customerLogout(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeCountAccessTokens', function() {
      it('should call customerPrototypeCountAccessTokens successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeCountAccessTokens
        //instance.customerPrototypeCountAccessTokens(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeCountDesigns', function() {
      it('should call customerPrototypeCountDesigns successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeCountDesigns
        //instance.customerPrototypeCountDesigns(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeCreateAccessTokens', function() {
      it('should call customerPrototypeCreateAccessTokens successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeCreateAccessTokens
        //instance.customerPrototypeCreateAccessTokens(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeCreateDesigns', function() {
      it('should call customerPrototypeCreateDesigns successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeCreateDesigns
        //instance.customerPrototypeCreateDesigns(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeDeleteAccessTokens', function() {
      it('should call customerPrototypeDeleteAccessTokens successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeDeleteAccessTokens
        //instance.customerPrototypeDeleteAccessTokens(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeDeleteDesigns', function() {
      it('should call customerPrototypeDeleteDesigns successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeDeleteDesigns
        //instance.customerPrototypeDeleteDesigns(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeDestroyByIdAccessTokens', function() {
      it('should call customerPrototypeDestroyByIdAccessTokens successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeDestroyByIdAccessTokens
        //instance.customerPrototypeDestroyByIdAccessTokens(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeDestroyByIdDesigns', function() {
      it('should call customerPrototypeDestroyByIdDesigns successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeDestroyByIdDesigns
        //instance.customerPrototypeDestroyByIdDesigns(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeFindByIdAccessTokens', function() {
      it('should call customerPrototypeFindByIdAccessTokens successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeFindByIdAccessTokens
        //instance.customerPrototypeFindByIdAccessTokens(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeFindByIdDesigns', function() {
      it('should call customerPrototypeFindByIdDesigns successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeFindByIdDesigns
        //instance.customerPrototypeFindByIdDesigns(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeGetAccessTokens', function() {
      it('should call customerPrototypeGetAccessTokens successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeGetAccessTokens
        //instance.customerPrototypeGetAccessTokens(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeGetDesigns', function() {
      it('should call customerPrototypeGetDesigns successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeGetDesigns
        //instance.customerPrototypeGetDesigns(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeUpdateAttributesPatchCustomersid', function() {
      it('should call customerPrototypeUpdateAttributesPatchCustomersid successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeUpdateAttributesPatchCustomersid
        //instance.customerPrototypeUpdateAttributesPatchCustomersid(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeUpdateAttributesPutCustomersid', function() {
      it('should call customerPrototypeUpdateAttributesPutCustomersid successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeUpdateAttributesPutCustomersid
        //instance.customerPrototypeUpdateAttributesPutCustomersid(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeUpdateByIdAccessTokens', function() {
      it('should call customerPrototypeUpdateByIdAccessTokens successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeUpdateByIdAccessTokens
        //instance.customerPrototypeUpdateByIdAccessTokens(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerPrototypeUpdateByIdDesigns', function() {
      it('should call customerPrototypeUpdateByIdDesigns successfully', function(done) {
        //uncomment below and update the code to test customerPrototypeUpdateByIdDesigns
        //instance.customerPrototypeUpdateByIdDesigns(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerReplaceById', function() {
      it('should call customerReplaceById successfully', function(done) {
        //uncomment below and update the code to test customerReplaceById
        //instance.customerReplaceById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerReplaceOrCreate', function() {
      it('should call customerReplaceOrCreate successfully', function(done) {
        //uncomment below and update the code to test customerReplaceOrCreate
        //instance.customerReplaceOrCreate(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerResetPassword', function() {
      it('should call customerResetPassword successfully', function(done) {
        //uncomment below and update the code to test customerResetPassword
        //instance.customerResetPassword(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerUpdateAll', function() {
      it('should call customerUpdateAll successfully', function(done) {
        //uncomment below and update the code to test customerUpdateAll
        //instance.customerUpdateAll(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerUpsertPatchCustomers', function() {
      it('should call customerUpsertPatchCustomers successfully', function(done) {
        //uncomment below and update the code to test customerUpsertPatchCustomers
        //instance.customerUpsertPatchCustomers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerUpsertPutCustomers', function() {
      it('should call customerUpsertPutCustomers successfully', function(done) {
        //uncomment below and update the code to test customerUpsertPutCustomers
        //instance.customerUpsertPutCustomers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerUpsertWithWhere', function() {
      it('should call customerUpsertWithWhere successfully', function(done) {
        //uncomment below and update the code to test customerUpsertWithWhere
        //instance.customerUpsertWithWhere(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));