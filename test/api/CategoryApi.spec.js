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
    instance = new tweakApi.CategoryApi();
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

  describe('CategoryApi', function() {
    describe('categoryCount', function() {
      it('should call categoryCount successfully', function(done) {
        //uncomment below and update the code to test categoryCount
        //instance.categoryCount(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryCreate', function() {
      it('should call categoryCreate successfully', function(done) {
        //uncomment below and update the code to test categoryCreate
        //instance.categoryCreate(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryCreateChangeStreamGetCategoriesChangeStream', function() {
      it('should call categoryCreateChangeStreamGetCategoriesChangeStream successfully', function(done) {
        //uncomment below and update the code to test categoryCreateChangeStreamGetCategoriesChangeStream
        //instance.categoryCreateChangeStreamGetCategoriesChangeStream(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryCreateChangeStreamPostCategoriesChangeStream', function() {
      it('should call categoryCreateChangeStreamPostCategoriesChangeStream successfully', function(done) {
        //uncomment below and update the code to test categoryCreateChangeStreamPostCategoriesChangeStream
        //instance.categoryCreateChangeStreamPostCategoriesChangeStream(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryDeleteById', function() {
      it('should call categoryDeleteById successfully', function(done) {
        //uncomment below and update the code to test categoryDeleteById
        //instance.categoryDeleteById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryExistsGetCategoriesidExists', function() {
      it('should call categoryExistsGetCategoriesidExists successfully', function(done) {
        //uncomment below and update the code to test categoryExistsGetCategoriesidExists
        //instance.categoryExistsGetCategoriesidExists(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryExistsHeadCategoriesid', function() {
      it('should call categoryExistsHeadCategoriesid successfully', function(done) {
        //uncomment below and update the code to test categoryExistsHeadCategoriesid
        //instance.categoryExistsHeadCategoriesid(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryFind', function() {
      it('should call categoryFind successfully', function(done) {
        //uncomment below and update the code to test categoryFind
        //instance.categoryFind(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryFindById', function() {
      it('should call categoryFindById successfully', function(done) {
        //uncomment below and update the code to test categoryFindById
        //instance.categoryFindById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryFindOne', function() {
      it('should call categoryFindOne successfully', function(done) {
        //uncomment below and update the code to test categoryFindOne
        //instance.categoryFindOne(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeCountChildren', function() {
      it('should call categoryPrototypeCountChildren successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeCountChildren
        //instance.categoryPrototypeCountChildren(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeCreateChildren', function() {
      it('should call categoryPrototypeCreateChildren successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeCreateChildren
        //instance.categoryPrototypeCreateChildren(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeDeleteChildren', function() {
      it('should call categoryPrototypeDeleteChildren successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeDeleteChildren
        //instance.categoryPrototypeDeleteChildren(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeDestroyByIdChildren', function() {
      it('should call categoryPrototypeDestroyByIdChildren successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeDestroyByIdChildren
        //instance.categoryPrototypeDestroyByIdChildren(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeFindByIdChildren', function() {
      it('should call categoryPrototypeFindByIdChildren successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeFindByIdChildren
        //instance.categoryPrototypeFindByIdChildren(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeGetChildren', function() {
      it('should call categoryPrototypeGetChildren successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeGetChildren
        //instance.categoryPrototypeGetChildren(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeGetParent', function() {
      it('should call categoryPrototypeGetParent successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeGetParent
        //instance.categoryPrototypeGetParent(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeUpdateAttributesPatchCategoriesid', function() {
      it('should call categoryPrototypeUpdateAttributesPatchCategoriesid successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeUpdateAttributesPatchCategoriesid
        //instance.categoryPrototypeUpdateAttributesPatchCategoriesid(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeUpdateAttributesPutCategoriesid', function() {
      it('should call categoryPrototypeUpdateAttributesPutCategoriesid successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeUpdateAttributesPutCategoriesid
        //instance.categoryPrototypeUpdateAttributesPutCategoriesid(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryPrototypeUpdateByIdChildren', function() {
      it('should call categoryPrototypeUpdateByIdChildren successfully', function(done) {
        //uncomment below and update the code to test categoryPrototypeUpdateByIdChildren
        //instance.categoryPrototypeUpdateByIdChildren(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryReplaceById', function() {
      it('should call categoryReplaceById successfully', function(done) {
        //uncomment below and update the code to test categoryReplaceById
        //instance.categoryReplaceById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryReplaceOrCreate', function() {
      it('should call categoryReplaceOrCreate successfully', function(done) {
        //uncomment below and update the code to test categoryReplaceOrCreate
        //instance.categoryReplaceOrCreate(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryUpdateAll', function() {
      it('should call categoryUpdateAll successfully', function(done) {
        //uncomment below and update the code to test categoryUpdateAll
        //instance.categoryUpdateAll(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryUpsertPatchCategories', function() {
      it('should call categoryUpsertPatchCategories successfully', function(done) {
        //uncomment below and update the code to test categoryUpsertPatchCategories
        //instance.categoryUpsertPatchCategories(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryUpsertPutCategories', function() {
      it('should call categoryUpsertPutCategories successfully', function(done) {
        //uncomment below and update the code to test categoryUpsertPutCategories
        //instance.categoryUpsertPutCategories(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoryUpsertWithWhere', function() {
      it('should call categoryUpsertWithWhere successfully', function(done) {
        //uncomment below and update the code to test categoryUpsertWithWhere
        //instance.categoryUpsertWithWhere(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
