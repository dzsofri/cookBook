var app = angular.module('cookBook', ['ngRoute', 'ngNotify']);

app.run(function($rootScope){
    $rootScope.serverUrl = 'http://localhost:5000';
});

app.config(function($routeProvider){

    $routeProvider
    .when('/login', {
        templateUrl: 'views/login.html'
    })
    .when('/reg', {
        templateUrl: 'views/registration.html',
        //controller: ''
    })
    .otherwise(
        {redirectTo: '/login'}
    )
});