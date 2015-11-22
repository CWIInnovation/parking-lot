angular.module('parking-lot').controller('VehicleCtrl', function ($scope, vehiclesService) {
    $scope.sortType = 'licensePlate'; // set the default sort type
    $scope.vehicle = {};     // set the default search/filter term
    var $divMensagem = document.querySelector(".home-message");
    
    vehiclesService.getFromAPI(function(vehicles) {
        vehiclesService.setVehiclesDatabase(vehicles).then(function () {
    		$divMensagem.innerHTML = 'Base de dados sincronizada!'; 
            $divMensagem.classList.add("success-message");
            
            setTimeout(function() { 
                $divMensagem.style.display = 'none';
            }, 1000);
            
            vehiclesService.getVehiclesDatabase().then(function (vehicles) {
    			$scope.vehicles = vehicles;
    		});
    	});
    }, function () {        
        $divMensagem.innerHTML = 'Não foi possível acessar a API de placas.'; 
        
        vehiclesService.getVehiclesDatabase().then(function(vehicles) {            
            if (vehicles.length > 0) {
                $divMensagem.innerHTML = $divMensagem.innerHTML + "<br><br><span>Utilizando última base de dados salva no aparelho...</span>";
                
                setTimeout(function() {
                   $divMensagem.style.display = 'none'; 
                }, 1800); 
            }   
            
            $scope.vehicles = vehicles;     
        });
    });
})
