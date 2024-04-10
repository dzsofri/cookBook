// app.js

var app = angular.module('app', ['ngRoute', 'ngNotify', 'angular-uuid']);

app.run(function($rootScope, $location) {
    $rootScope.serverUrl = 'http://localhost:3000';
    $rootScope.company = 'CookBook';
    $rootScope.year = new Date().getFullYear();

    // Ellenőrizze, hogy a felhasználó be van-e jelentkezve
    let loggedUser = localStorage.getItem('CookBookUser');
    if (loggedUser != null) {
        $rootScope.isLoggedIn = true;
        $location.path('/mainPage');
    } else {
        $rootScope.isLoggedIn = false;
        $location.path('/login');
    }
   
   
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/views/login.html',
            controller: 'userCtrl'
        })
        .when('/register', {
            templateUrl: '/views/register.html',
            controller: 'userCtrl'
        })
        .when('/mainPage', {
            templateUrl: '/views/fooldal.html'
        })
        .when('/breakfast', {
            templateUrl: '/views/reggeli.html'
        })
        .when('/lunch', {
            templateUrl: '/views/ebed.html'
        })
        .when('/appetizer', {
            templateUrl: '/views/eloetel.html'
        })
        .when('/mainCourse', {
            templateUrl: '/views/foetel.html'
        })
        .when('/sideDish', {
            templateUrl: '/views/koret.html'
        })
        .when('/dessert', {
            templateUrl: '/views/desszert.html'
        })
        .when('/dinner', {
            templateUrl: '/views/vacsora.html'
        })
        .when('/myRecipes', {
            templateUrl: '/views/sajatReceptek.html',
            controller: 'sajatreceptekCtrl'
        })
        .when('/aboutUs', {
            templateUrl: '/views/rolunk.html'
        })
        .when('/index',{
            controller: 'mainCtrl'
        })
        .otherwise({
            redirectTo: '/login'
            
        });

    
});

app.controller('mainCtrl', function($scope, $location, $rootScope) {
    $scope.logout = function() {
        // Töröld a felhasználói adatokat a localStorage-ból
        localStorage.removeItem('CookBookUser');
        // Állítsd be a bejelentkezési állapotot hamisra
        $rootScope.isLoggedIn = false;
        // Irányítsd át a felhasználót a bejelentkező oldalra
        $location.path('/login');
    };
});