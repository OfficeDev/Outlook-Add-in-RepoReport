/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
* See LICENSE in the project root for license information.
*/

(function(){
  'use strict';

  angular.module('officeAddin')
         .controller('homeController', ['dataService', homeController]);

  function homeController(dataService){
    var vm = this;

    // List of repos mentioned in the email.
    vm.repos;
    
    /////////////////////////////////////////
		// End of exposed properties and methods. 
    
    /**
     * Apply regular expressions from manifest.xml on message body to get the
     * URLs that caused the add-in to activate.
     */
    var repoUrls = Office.context.mailbox.item.getRegExMatches().GitHubUrl;
    dataService.getRepoData(repoUrls)
      .then(function(repoData) {
        vm.repos = repoData;
      });
  }

})();
