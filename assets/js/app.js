var app = angular.module('cookBook', ['ngRoute', 'ngNotify', 'angular-uuid']);

function showMessage(msg){
    let alertBox = document.querySelector('#alertBox');
    alertBox.innerHTML = `<strong>HIBA!</strong> ${msg}`;
    alertBox.classList.remove('d-none');
}
let loggedUser = JSON.parse(sessionStorage.getItem('CookBook'));

app.run(function($rootScope, $location){
    $rootScope.serverUrl = 'http://localhost:3000';
    $rootScope.company = 'cookBook';
    $rootScope.year = new Date().getFullYear();

    
    if (sessionStorage.getItem('CookBook')){
        $rootScope.isLoggedIn = true;
        token = JSON.parse(sessionStorage.getItem('CookBook')).token;
        $rootScope.loggedUser = $rootScope.getLoggedUser();
    }else{
        $rootScope.isLoggedIn = false;
        $rootScope.loggedUser = null;
    }
});

app.config(function($routeProvider){

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
        templateUrl: '/views/fooldal.html',
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
    .otherwise(
        {redirectTo: '/login'}
    )
});




