angular.module('parking-lot').controller('DetailCtrl', ['$scope', 'vehicle',
    function ($scope, vehicle) {
        $scope.ownerInfo = vehicle;
    }]);
