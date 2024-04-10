
app.controller('userCtrl', function($scope, $rootScope, $location, ngNotify){


    $scope.register = function(){

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

       // Bejelentkezés
    $scope.login = function() {
        // Felhasználónév és jelszó begyűjtése
        let name = document.querySelector('#name').value;
        let passwd = document.querySelector('#passwd').value;

        // Adatok küldése a szervernek
        axios.post(`http://localhost:3000/logincheck`, { name: name, passwd: passwd })
            .then(res => {
                if (!res.data || Object.keys(res.data).length === 0) {
                    // Hibás bejelentkezési adatok esetén üzenet megjelenítése
                    $scope.showMessage("Hibás belépési adatok!");
                } else {
                    // Sikeres bejelentkezés esetén felhasználó adatainak elmentése a localStorage-ba
                    localStorage.setItem('CookBookUser', JSON.stringify(res.data));
                    $rootScope.isLoggedIn = true; // Bejelentkezési állapot beállítása
                    $location.path('/mainPage'); // Átirányítás a főoldalra
                }
            })
            .catch(err => {
                // Hibakezelés
                console.error('Bejelentkezési hiba:', err);
            });
    };


    $scope.locationmain = function(){
        $location.path('/mainPage');
    }
    $scope.removeitem = function(){
        console.log('removeitem called');
        localStorage.removeItem('CookBookUser');
    }
    
    // Kijelentkezés
    $scope.logout = function() {
        localStorage.removeItem('CookBookUser');
        $rootScope.isLoggedIn = false;
        console.log(isLoggedIn);
        $location.path('/login');
    };
      

    $scope.showMessage = function(msg){
        let alertBox = document.querySelector('#alertBox');
        alertBox.innerHTML = `<strong>HIBA!</strong> ${msg}`;
        alertBox.classList.remove('d-none');
    };

});




