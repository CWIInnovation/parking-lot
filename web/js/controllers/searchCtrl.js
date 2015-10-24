angular.module("cwiCarros").controller("searchCtrl", function ($scope) {
	
	var cadastro1 = {
		plate: 'IUR6888',
		name: 'Robson Luiz Valim de Bitttencourt',
		car: 'Ônix',
		phoneExtension: '633',
		cellphone: '81442804',
		project: 'Renner',
		floor: '4'
	};

	var cadastro2 = {
		plate: 'IMK7971',
		name: 'João da Silva Sauro',
		car: 'Gol',
		phoneExtension: '458',
		cellphone: '98564758',
		project: 'Sicredi',
		floor: '3'
	};

	$scope.registers = [cadastro1, cadastro2];

	$scope.searchRegister = function (plate, registers) {
		if (plate.length == 7) {
			var result = registers.filter(function (register) {
				if(register.plate.toUpperCase() === plate.toUpperCase()) return register;
			});

			if (result.length > 0) {
				$scope.register = result[0];
			} 
		}
	};

});