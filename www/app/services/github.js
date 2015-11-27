angular.module('parking-lot').factory('githubService', ['$http',
    function ($http) {
        function init(successCallback) {
            $http.get('https://api.github.com/repos/CWIInnovation/parking-lot/contributors')
            .success(function (data) {
                successCallback(data);
            });
        }

        return {
            get: init
        };
    }]);
