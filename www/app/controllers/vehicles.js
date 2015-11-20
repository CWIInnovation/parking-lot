angular.module('parking-lot').controller('VehicleCtrl', function ($scope, vehiclesService) {
    $scope.sortType = 'licensePlate'; // set the default sort type
    $scope.vehicle = {};     // set the default search/filter term

    vehiclesService.getVehiclesDatabase().then(function(vehicles) {        
        document.querySelector(".home-message").style.display = 'none';
        $scope.vehicles = vehicles;
        
        if (vehicles.length == 0)
            document.querySelector(".home-message").innerHTML = 'Baixando base de dados de placas, por favor aguarde...';             
    });
    
    vehiclesService.getFromAPI().then(function(vehicles) {
        document.querySelector(".home-message").style.display = 'block';
        document.querySelector(".home-message").innerHTML = 'Sincronizando base de dados...';
        
    	vehiclesService.setVehiclesDatabase(vehicles).then(function () {
    		document.querySelector(".home-message").innerHTML = 'Base de dados sincronizada!'; 
            document.querySelector(".home-message").classList.add("success-message");
            
            setTimeout(function() { 
                document.querySelector(".home-message").style.display = 'none';
            }, 1000);
            
            vehiclesService.getVehiclesDatabase().then(function (vehicles) {
    			$scope.vehicles = vehicles;
    		});
    	});
    });
})
