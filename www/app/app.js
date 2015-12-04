angular.module('parking-lot', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'app/views/tabs.html'
        })
        .state('app.home', {
            url: '/home',
            views: {
                'home-tab': {
                    templateUrl: 'app/views/home.html',
                    controller: 'VehicleCtrl'
                }
            }
        })
        .state('app.about', {
            url: '/about',
            views: {
                'about-tab': {
                    templateUrl: 'app/views/about.html',
                    controller: 'AboutCtrl'
                }
            }
        })
        .state('app.details', {
            url: '/details/:licensePlate',
            views: {
                'home-tab': {
                    templateUrl: 'app/views/details.html',
                    controller: 'DetailCtrl',
                    resolve: {
                        vehicle: function ($stateParams, vehiclesService) {                            
                            return vehiclesService.findVechicleByLicensePlate($stateParams.licensePlate);
                        }
                    }
                }
            }
        });

        $urlRouterProvider.otherwise('/app/home');
    })
    .constant('config', {
        appName: 'parking-lot',
        appVersion: 1.0,
        apiUrl: 'http://parkingservice-1.apphb.com/',
        databaseName: 'parking_lot.db',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
