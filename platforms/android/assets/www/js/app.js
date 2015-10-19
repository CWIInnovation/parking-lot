// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('parking-lot', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('tabs.facts', {
                url: "/facts/:id",
                views: {
                    'home-tab': {
                        templateUrl: "templates/facts.html"
                    }
                }
            });


        $urlRouterProvider.otherwise("/tab/home");

    })

    .controller('HomeTabCtrl', function ($scope) {
        console.log('HomeTabCtrl');
    })

    .controller('vehicleController', function ($scope) {
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

    .controller('detailController', function ($scope) {
        $scope.ownerInfo = {id: 1, name: 'Fulano Silva', image: 'foto1.jpg'};
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
