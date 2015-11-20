angular.module('parking-lot').service('vehiclesService', function (databaseService, config, $http, $q) {
    
    this.getVehiclesDatabase = function () {
        var deferred = $q.defer();        
        databaseService.get().then(function () {

            var result = [];

            var handleResult = function (event) {
                var cursor = event.target.result;

                if (cursor && cursor.value.active) {
                    result.push({
                        ID: cursor.key,
                        licensePlate: cursor.value.licensePlate,
                        vehicleType: cursor.value.vehicleType,
                        team: cursor.value.team,
                        driver: cursor.value.driver,
                        active: cursor.value.active,
                        personalNumber: cursor.value.personalNumber,
                        comercialNumber: cursor.value.comercialNumber,
                        login: cursor.value.login
                    });
                    cursor.continue();
                }
            };

            var transaction = db.transaction(["vehicle"], "readonly");
            var objectStore = transaction.objectStore("vehicle");
            objectStore.openCursor().onsuccess = handleResult;

            transaction.oncomplete = function (event) {
                deferred.resolve(result);
            };

        });
        return deferred.promise;
    };
    
    this.setVehiclesDatabase = function (vehicles) {
        var deferred = $q.defer();

        databaseService.get().then(function () {            
            if (db === null) {
                deferred.reject("IndexDB is not open yet!");
            }
            var transaction = db.transaction(["vehicle"], "readwrite");
            var store = transaction.objectStore("vehicle");
            var request;

            angular.forEach(vehicles, function (vehicle) {
                request = store.put(vehicle);
            });

            if (request != undefined) {
                request.onsuccess = function (e) {
                    deferred.resolve();
                };

                request.onerror = function (e) {
                    deferred.reject("Todo item couldn't be added!");
                };
            } else {
                deferred.resolve();
            }
        });
        
        return deferred.promise;
    };

    this.getFromAPI = function () {
        var deferred = $q.defer();

        $http.get(config.apiUrl + 'Vehicle')
        .success(function (data) {
            deferred.resolve(data);
        }).error(function (msg, code) {
            deferred.reject(msg);
        });
        return deferred.promise;
    };

});