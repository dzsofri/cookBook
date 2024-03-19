app.controller('userCtrl', function($scope, $rootScope, $location, ngNotify){
    $scope.user = {};



    function register(){
        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let passwd = document.querySelector('#passwd');
        let confirm = document.querySelector('#confirm');
    
        if (name.value == "" || email.value == "" || passwd.value == "" || confirm.value == ""){
            showMessage("Nem adtál meg minden adatot!");
        }
        else{
            if (passwd.value != confirm.value){
                showMessage("A megadott jelszavak nem egyeznek!");
            }
            else
            {
                
                    let newUser = {
                        name: name.value,
                        email: email.value,
                        passwd: passwd.value
                    } 
                    axios.post('http://localhost:3000/users', newUser).then(res =>{
                         alert('Sikeres regisztráció! Most már beléphetsz!');
                         document.location.href = 'index.html';

    
                    });
                }
            }
        }
    

    $scope.login = function(){
        if ($scope.user.email == null || $scope.user.passwd == null){
            ngNotify.set('Nem adtál meg minden adatot!!', 'error');
        }else{
            data = {
                email: $scope.user.email,
                passwd: CryptoJS.SHA1($scope.user.passwd).toString()
            }

            axios.post(`http://localhost:3000/users`, data).then(res => {
                if(res.data.length == 0){
                    showMessage("Hibás belépési adatok!");
                }else
                {
                    sessionStorage.setItem('CookBook', JSON.stringify(res.data[0]));
                    document.location.href='index.html';

                }
            });
        }
    }

    
    
    function logout(){
        sessionStorage.removeItem('CookBook');
        document.location.href='index.html';
    }


});

