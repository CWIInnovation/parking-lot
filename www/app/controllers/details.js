angular.module('parking-lot').controller('DetailCtrl', ["$scope","$stateParams", "vehiclesService", function ($scope, $stateParams, $vehiclesService) {
    $vehiclesService.getVehiclesDatabase().then(function (vehicles) {
		vehicles.forEach(function (vehicle) {
        if (vehicle.licensePlate == $stateParams.licensePlate)
            $scope.ownerInfo = vehicle;
		});
	});
}]);
