/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
* See LICENSE in the project root for license information.
*/

(function(){
  'use strict';

  angular.module('officeAddin')
         .service('dataService', ['$q', '$http', dataService]);
         
  function dataService($q, $http){
    /**
     * Exposed properties and methods.
     */
    return {
      getRepoData: getRepoData
    };

    /////////////////////////////////////////
		// End of exposed properties and methods.
    
    /**
     * Given an array of GitHub repo URLs, this function
     * returns an array of objects describing the URLs. 
     */
    function getRepoData(repoNames) {
      var deferred = $q.defer();
      var repos = [];
      var reposProcessed = 0;
      
      // Iterate over the repo names.
      for (var i = 0; i < repoNames.length; i++) {
        var repoParts = repoNames[i].split('/');
        var ownerName = repoParts[1];
        var repoName = repoParts[2];
        
        $http.get('https://api.github.com/repos/' + ownerName + '/' + repoName)
          .then(function(response) {
            var data = response.data;
            var repo = {
              'title': data.name,
              'description': data.description,
              'url': data.html_url,
              'stars': data.stargazers_count,
              'forks': data.forks_count,
              'owner': data.owner.login,
              'ownerUrl': data.owner.html_url
            };
            
            repos.push(repo); 
            reposProcessed++;
            
            if (reposProcessed === repoNames.length) {
              deferred.resolve(repos);
            }
            
          }, function(error) {
            reposProcessed++;
            console.log('Error getting repo info: ', error);
            
            if (reposProcessed === repoNames.length - 1) {
              deferred.resolve(repos);
            }
          });
      }
      
      return deferred.promise;
    }; 

  }
})();
