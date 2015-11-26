// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('parking-lot', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "app/views/tabs.html"
            })
            .state('app.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "app/views/home.html",
                        controller: 'VehicleCtrl'
                    }
                }
            })
            .state('app.about', {
                url: "/about",
                cache: false,
                views: {
                    'about-tab': {
                        templateUrl: "app/views/about.html",
                        controller: 'AboutCtrl'
                    }
                }
            })
            .state('app.details', {
                cache: false,
                url: "/details/:licensePlate",
                views: {
                    'home-tab': {
                        templateUrl: "app/views/details.html",
                        controller: 'DetailCtrl'
                    }
                }
            });


        $urlRouterProvider.otherwise("/app/home");

    })

    .constant('config', {
        appName: 'parking-lot',
        appVersion: 1.0,
        apiUrl: 'http://parkingservice-1.apphb.com/',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })

    .run(function ($ionicPlatform) {
        
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
