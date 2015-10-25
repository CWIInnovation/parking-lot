angular.module("parkingLotWeb").controller("searchCtrl", function ($scope, vehiclesService) {
	
	$scope.registers = vehiclesService.getVehicles();

	$scope.searchRegister = function (licensePlate, registers) {
		if (licensePlate.length == 7) {
			var result = registers.filter(function (register) {
				if(register.licensePlate.toUpperCase().replace(/ /g, '') === licensePlate.toUpperCase()) return register;
			});

			if (result.length > 0) {
				$scope.register = result[0];
			} 
		}
	};

});