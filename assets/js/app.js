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
            templateUrl: '/views/sajatReceptek.html'
        })
        .when('/aboutUs', {
            templateUrl: '/views/rolunk.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
