angular.module('parking-lot').factory('vehiclesService', ['databaseService', 'config', '$http', '$q',
    function (databaseService, config, $http, $q) {
        function getVehiclesDatabase() {
            var deferred = $q.defer();
            databaseService.get().then(function () {
                var result = [];

                window.sqlitePlugin.openDatabase({name: config.databaseName}, function(db) {
                    db.transaction(function(tx) {
                        tx.executeSql('SELECT id, licensePlate, driver, vehicleType, team, personalNumber, comercialNumber, login FROM vehicles ORDER BY licensePlate;', [], function (tx, res) {
                            var i = 0,
                            len = res.rows.length;
                            for (; i < len; i++)
                            result.push(res.rows.item(i));

                            deferred.resolve(result);
                        }, function (err) {
                            deferred.reject(err.toString());
                        });
                    }, function(err) {
                        deferred.reject(err.toString());
                    });
                });
            });
            return deferred.promise;
        }

        function getVehicleDatabase(id) {
            var deferred = $q.defer();
            databaseService.get().then(function () {
                window.sqlitePlugin.openDatabase({name: config.databaseName}, function(db) {
                    db.transaction(function(tx) {
                        tx.executeSql('SELECT id, licensePlate, driver, vehicleType, team, personalNumber, comercialNumber, login FROM vehicles WHERE id = ? ORDER BY licensePlate;', [id], function (tx, res) {
                            if (res.rows.length === 1) {
                                deferred.resolve(res.rows.item(0));
                            }
                            else {
                                deferred.reject('Vehicle not found');
                            }
                        }, function (err) {
                            deferred.reject(err.toString());
                        });
                    }, function(err) {
                        deferred.reject(err.toString());
                    });
                });
            });
            return deferred.promise;
        }

        function setVehiclesDatabase(vehicles) {
            var deferred = $q.defer();

            databaseService.get().then(function () {
                window.sqlitePlugin.openDatabase({name: config.databaseName}, function(db) {
                    db.transaction(function(tx) {
                        tx.executeSql('DELETE FROM vehicles;');
                        angular.forEach(vehicles, function (vehicle) {
                            tx.executeSql('INSERT INTO vehicles(licensePlate, driver, vehicleType, team, personalNumber, comercialNumber, login) VALUES (?, ?, ?, ?, ?, ?, ?)', [
                                vehicle.licensePlate,
                                vehicle.driver,
                                vehicle.vehicleType,
                                vehicle.team,
                                vehicle.personalNumber,
                                vehicle.comercialNumber,
                                vehicle.login
                            ]);
                        });
                        deferred.resolve();
                    }, function(err) {
                        deferred.reject(err.toString());
                    });
                });
            });

            return deferred.promise;
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
            getVehicleDatabase: getVehicleDatabase,
            setVehiclesDatabase: setVehiclesDatabase,
            getFromAPI: getFromAPI
        };

    }]);
