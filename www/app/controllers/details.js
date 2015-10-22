angular.module('parking-lot.controllers').controller('DetailCtrl', ["$scope","$stateParams", function ($scope, $stateParams) {
    
    $scope.ownerInfo = {id: $stateParams.licensePlate, name: 'Fulano Silva', image: 'foto1.jpg'};
}]);
