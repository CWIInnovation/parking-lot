angular.module('parking-lot').controller('DetailCtrl', ["$scope","$stateParams", "vehiclesService", function ($scope, $stateParams, $vehiclesService) {
    var veiculos = $vehiclesService.getVehicles();
    
    veiculos.forEach(function (veiculo) {
        if (veiculo.licensePlate == $stateParams.licensePlate)
            $scope.ownerInfo = veiculo;
    });    
}]);
