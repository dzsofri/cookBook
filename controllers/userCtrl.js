app.controller('userCtrl', function($scope, $rootScope, $location, ngNotify){
    $scope.user = {};

    $scope.register = function(){
        if ($scope.user.name == null || $scope.user.email == null || $scope.user.passwd == null || $scope.user.confirm == null){
            ngNotify.set('Nem adtál meg minden adatot!!', 'error');
           
        }else{
            if ($scope.user.passwd != $scope.user.confirm){
                ngNotify.set('A megadott jelszavak nem egyeznek!', 'error');
              
            }else{
                if (!$scope.user.passwd.match($rootScope.passwdRegExp)){
                 
                 ngNotify.set('A megadott jelszó nem megfelelő erősségű!', 'error');
                }else{
                    
                    
                            data = {
                                name: $scope.user.name,
                                email: $scope.user.email,
                                passwd: $scope.user.passwd
                            }
                            axios.post($rootScope.serverUrl + '/users', data).then(res=>{
                                if(res.data.affectedRows == 1){
                                    
                                    ngNotify.set('Sikeres regisztráció!', 'success');
                                    $location.path('/login');
                                    //TODO: valamiért nem irányít át
                                }else{
                                    ngNotify.set('Hiba történt a regisztráció során!', 'error');
                                    
                                }
                            });
                        
                    
                }
            }
        }
    }

    $scope.login = function(){
        if ($scope.user.name == null || $scope.user.passwd == null){
            ngNotify.set('Nem adtál meg minden adatot!!', 'error');
        }else{
            data = {
                name: $scope.user.name,
                passwd: $scope.user.passwd
            }
            axios.post($rootScope.serverUrl + '/users', data).then(res=>{
                if(res.data.token == ""){
                    ngNotify.set('Hibás belépési adatok!', 'error');
                }else{
                    sessionStorage.setItem('cookBook', JSON.stringify(res.data.token));
                    ngNotify.set('Sikeres belépés', 'succes');
                    $rootScope.isLoggedIn = true;
                  
                }
            });
        }
    }
});