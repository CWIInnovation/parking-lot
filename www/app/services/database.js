angular.module('parking-lot').factory('databaseService', function ($q) {

    function init() {

        var deferred = $q.defer();

        var openRequest = window.indexedDB.open("parking_lot", 8);               

        openRequest.onerror = function (e) {
            deferred.reject(e.toString());
        };

        openRequest.onupgradeneeded = function (e) {               
            var thisDb = e.target.result;
            var objectStore;

            if (!thisDb.objectStoreNames.contains("vehicle")) {
                objectStore = thisDb.createObjectStore("vehicle", { keyPath: "licensePlate", autoIncrement: false });
                objectStore.createIndex("driver", "driver", { unique: false });
                objectStore.createIndex("vehicleType", "vehicleType", { unique: false });
                objectStore.createIndex("team", "team", { unique: false });
                objectStore.createIndex("personalNumber", "personalNumber", { unique: false });
                objectStore.createIndex("comercialNumber", "comercialNumber", { unique: false });
                objectStore.createIndex("login", "login", { unique: false });
            }

        };

        openRequest.onsuccess = function (e) {
            db = e.target.result;           
            db.onerror = function (event) {
                deferred.reject("Database error: " + event.target.errorCode);
            };

            setUp = true;
            deferred.resolve(true);

        };
        return deferred.promise;
    }
    return {
        get: function () {
            return init();
        }
    };
})