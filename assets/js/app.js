var app = angular.module('cookBook', ['ngRoute', 'ngNotify', 'angular-uuid']);


let loggedInMenu = document.querySelector('#loggedInMenu');
let loggedOutMenu = document.querySelector('#loggedOutMenu');

let loggedUser = sessionStorage.getItem('CookBook');



function showMessage(msg){
    let alertBox = document.querySelector('#alertBox');
    alertBox.innerHTML = `<strong>HIBA!</strong> ${msg}`;
    alertBox.classList.remove('d-none');
}



let loggedUser = sessionStorage.getItem('CookBook');


app.run(function($rootScope, $location){
    $rootScope.serverUrl = 'http://localhost:3000';
    $rootScope.company = 'cookBook';
    $rootScope.year = new Date().getFullYear();
   
    if (loggedUser != null){
        loggedOutMenu.classList.add('d-none');
        loggedInMenu.classList.remove('d-none');
        $location.path('/mainPage');
    } else {
        loggedInMenu.classList.add('d-none');
        loggedOutMenu.classList.remove('d-none');
        $location.path('/login');
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




