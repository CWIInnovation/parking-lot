angular.module('parking-lot.controllers').controller('VehicleCtrl', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.vehicle = {};     // set the default search/filter term

    // create the list of vehicles
    $scope.vehicles = [
        {licensePlate: 'GBR-3927', owner: {id: 1, name: 'Fulano Silva', image: 'foto1.jpg'}},
        {licensePlate: 'VJY-4852', owner: {id: 2, name: 'Ciclano Santos', image: 'foto2.jpg'}},
        {licensePlate: 'LXI-6234', owner: {id: 3, name: 'Rodolfo Luiz', image: 'foto3.jpg'}},
        {licensePlate: 'UTG-1463', owner: {id: 4, name: 'Mariana Almeida', image: 'foto4.jpg'}},
        {licensePlate: 'FFZ-8542', owner: {id: 5, name: 'Roberta Fonseca', image: 'foto5.jpg'}},
    ];
})
