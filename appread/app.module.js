/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
* See LICENSE in the project root for license information.
*/

(function(){
  'use strict';

  // Create the Angular app.
  var officeAddin = angular.module('officeAddin', [
    'ngRoute',
    'ngSanitize'
  ]);

  // Configure the Angular app.
  officeAddin.config(['$logProvider', function($logProvider){
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }]);

  // When Office has initalized, manually bootstrap the Angular app.
  Office.initialize = function(){
    console.log('Office initialized. Bootstrapping the Angular app...');
    angular.bootstrap(jQuery('#container'), ['officeAddin']);
  };

})();
