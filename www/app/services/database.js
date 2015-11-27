angular.module('parking-lot').factory('databaseService', ['$q', 'config',
    function ($q, config) {
        function init() {
            var deferred = $q.defer();
            
            window.sqlitePlugin.openDatabase({name: config.databaseName}, function(db) {
                db.transaction(function(tx) {
                    // Verify if table exists
                    tx.executeSql('SELECT COUNT(id) FROM vehicles', [], function (tx, res) {
                        deferred.resolve(true);
                    }, function () {
                        // Create table
                        tx.executeSql('DROP TABLE IF EXISTS vehicles');
                        tx.executeSql('CREATE TABLE IF NOT EXISTS vehicles (id INTEGER PRIMARY KEY, licensePlate TEXT, driver TEXT, vehicleType TEXT, team TEXT, personalNumber TEXT, comercialNumber TEXT, login TEXT)');
                        deferred.resolve(true);
                    });
                }, function(err) {
                    deferred.reject(err.toString());
                });
            });

            return deferred.promise;
        }

        return {
            get: function () {
                return init();
            }
        };
    }]);
