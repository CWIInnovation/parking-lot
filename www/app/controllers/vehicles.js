angular.module('parking-lot').controller('VehicleCtrl', function ($scope, vehiclesService) {
    $scope.sortType = 'licensePlate'; // set the default sort type
    $scope.vehicle = {};     // set the default search/filter term

    vehiclesService.getFromAPI().then(function(vehicles){
    	vehiclesService.setVehiclesDatabase(vehicles).then(function () {
    		vehiclesService.getVehiclesDatabase().then(function (vehicles) {
    			$scope.vehicles = vehicles;
    		});
    	});
    });
})
