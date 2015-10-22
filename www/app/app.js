// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('parking-lot.controllers', []);
angular.module('parking-lot', ['ionic', 'parking-lot.controllers'])

    .config(function ($stateProvider, $urlRouterProvider) {

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
                views: {
                    'about-tab': {
                        templateUrl: "app/views/about.html",
                    }
                }
            })
            .state('app.details', {
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
