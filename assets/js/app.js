var app = angular.module('cookBook', ['ngRoute', 'ngNotify', 'angular-uuid']);

app.run(function($rootScope, $location){
    $rootScope.serverUrl = 'http://localhost:5000';
    $rootScope.company = 'cookBook';
    $rootScope.year = new Date().getFullYear();



    if (sessionStorage.getItem('CookBook')){
        $rootScope.isLoggedIn = true;
        token = JSON.parse(sessionStorage.getItem('CookBook')).token;
        $rootScope.loggedUser = $rootScope.getLoggedUser(token);
    }else{
        $rootScope.isLoggedIn = false;
        $rootScope.loggedUser = null;
    }
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




