angular.module('parking-lot').controller('VehicleCtrl', ['$state', '$scope', 'vehiclesService', '$ionicLoading',
    function ($state, $scope, vehiclesService, $ionicLoading) {
        $ionicLoading.show();
        $scope.sortType = 'licensePlate'; // set the default sort type
        var $divMensagem = document.querySelector('.home-message');
        
        vehiclesService.getFromAPI(function(vehicles) {
            vehiclesService.setVehiclesDatabase(vehicles);
                        
            $divMensagem.innerHTML = 'Base de dados sincronizada!';
            $divMensagem.classList.add('success-message');            
            setTimeout(function() {
                fadeOut($divMensagem, 400);
            }, 1000);

            vehiclesService.getVehiclesDatabase();            
            $scope.vehicles = vehicles;
            $ionicLoading.hide();                        
        }, function () {
            $divMensagem.innerHTML = 'Não foi possível acessar a API de placas.';
            $ionicLoading.hide();
            
            var vehicles = vehiclesService.getVehiclesDatabase();
            
            if (vehicles.length > 0) {
                $divMensagem.innerHTML = $divMensagem.innerHTML + '<br><br><span>Utilizando última base de dados salva no aparelho...</span>';
                setTimeout(function() {
                    fadeOut($divMensagem, 400);
                }, 4000);
            }

            $scope.vehicles = vehicles;
        });

        function fadeOut(el, duration) {
            var s = el.style, step = 25/(duration || 300);
            s.opacity = s.opacity || 1;
            (function fade() { (s.opacity -= step) < 0 ? s.display = 'none' : setTimeout(fade, 25); })();
        }
    }]);
