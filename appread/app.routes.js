/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
* See LICENSE in the project root for license information.
*/

(function(){
  'use strict';

  var officeAddin = angular.module('officeAddin');
  officeAddin.config(['$routeProvider', routeConfigurator]);

  function routeConfigurator($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      });

    $routeProvider.otherwise({redirectTo: '/'});
  }
})();
