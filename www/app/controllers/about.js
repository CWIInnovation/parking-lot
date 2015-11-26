angular.module('parking-lot').controller('AboutCtrl', ['$scope', 'githubService',
    function ($scope, githubService) {
        $scope.currentDate = new Date();
        $scope.contributors = [];
        githubService.get(function (data) {
            $scope.contributors = data;
        });

        $scope.openUrl = function (url) {
            if (!url)
                return;
            window.open(url, '_system', 'location=yes');
        };
    }]);
