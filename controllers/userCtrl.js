
app.controller('userCtrl', function($scope, $rootScope, $location, ngNotify){


    function register(){

        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let passwd = document.querySelector('#passwd');
        let confirm = document.querySelector('#confirm');
    
        if (name.value == "" || email.value == "" || passwd.value == "" || confirm.value == ""){
            $scope.showMessage("Nem adtál meg minden adatot!");
        }
        else{
            if (passwd.value != confirm.value){
                $scope.showMessage("A megadott jelszavak nem egyeznek!");
            }
            else
            {
                
                let newUser = {
                    name: name.value,
                    email: email.value,
                    passwd: passwd.value
                }; 
                axios.post('http://localhost:3000/users', newUser).then(res =>{
                    alert('Sikeres regisztráció! Most már beléphetsz!');
                    name.text = "";
                    
                    $location.path('/login');
                });
            }
        }

    };

    $scope.login = function(){
        let name = document.querySelector('#name');
        let passwd = document.querySelector('#passwd');
    
        if (name.value == "" || passwd.value == "" ){
            $scope.showMessage("Nem adtál meg minden adatot!");
        }
        else{
            let data = {
                name: name.value,
                passwd: passwd.value
            }
            axios.post(`http://localhost:3000/users`, data).then(res => {
                if(res.data.length == 0){
                    $scope.showMessage("Hibás belépési adatok!");
                }else
                {
                    sessionStorage.setItem('CookBook', JSON.stringify(res.data));
                    $location.path('/mainPage');
                }
            });
        }
    };

    let user = sessionStorage.getItem('CookBook');



    $scope.logout = function(){
        sessionStorage.removeItem('CookBook');
        
        $location.path('/login');};
      

    $scope.showMessage = function(msg){
        let alertBox = document.querySelector('#alertBox');
        alertBox.innerHTML = `<strong>HIBA!</strong> ${msg}`;
        alertBox.classList.remove('d-none');
    };

});




