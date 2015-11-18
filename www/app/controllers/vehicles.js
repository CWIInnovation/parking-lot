angular.module('parking-lot').controller('VehicleCtrl', function ($scope, vehiclesService) {
    $scope.sortType = 'licensePlate'; // set the default sort type
    $scope.vehicle = {};     // set the default search/filter term

    vehiclesService.getVehiclesDatabase().then(function(vehicles) {
        console.log("Buscando última base de dados...");
        $scope.vehicles = vehicles;
    });
    
    vehiclesService.getFromAPI().then(function(vehicles){
        console.log("Sincronizando base de dados...");
    	vehiclesService.setVehiclesDatabase(vehicles).then(function () {
    		vehiclesService.getVehiclesDatabase().then(function (vehicles) {
    			$scope.vehicles = vehicles;
    		});
    	});
    });
})
