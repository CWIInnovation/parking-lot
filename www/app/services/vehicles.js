angular.module('parking-lot').factory('vehiclesService', ['$rootScope', 'config', '$http', '$q',
    function ($rootScope, config, $http, $q) {
        
        function getVehiclesDatabase() {
            var db = localStorage.getItem("ParkingLotDatabase");
            return JSON.parse(db);
        }
        
        function findVechicleByLicensePlate(licensePlate) {
            var vehicle = $rootScope.vehicles.filter(function (vehicle) { 
                return vehicle.licensePlate == licensePlate; 
            });
            
            return vehicle[0];            
        }        

        function setVehiclesDatabase(vehicles) {
            localStorage.setItem("ParkingLotDatabase", JSON.stringify(vehicles));  
            $rootScope.vehicles = vehicles;
        }

        function getFromAPI(successCallback, failCallback) {
            $http.get(config.apiUrl + 'Vehicle')
            .success(function (data) {
                successCallback(data);
            }).error(function (msg, code) {
                failCallback(msg);
            });
        }

        return {
            getVehiclesDatabase: getVehiclesDatabase,
            findVechicleByLicensePlate: findVechicleByLicensePlate,
            setVehiclesDatabase: setVehiclesDatabase,
            getFromAPI: getFromAPI
        };

    }]);
