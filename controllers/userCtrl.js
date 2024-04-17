
app.controller('userCtrl', function($scope, $rootScope, $location, ngNotify){


    $scope.register = function(){
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let passwd = document.querySelector('#passwd').value;
        let confirm = document.querySelector('#confirm').value;
    
        if (name == "" || email == "" || passwd == "" || confirm == ""){
            $scope.showMessage("Nem adtál meg minden adatot!");
        }
        else {
            if (passwd != confirm){
                $scope.showMessage("A megadott jelszavak nem egyeznek!");
            }
            else {
                // Ellenőrizze, hogy a felhasználónév létezik-e
                axios.post('http://localhost:3000/logincheck', { name: name })
                    .then(res => {
                        if (res.data && res.data.length > 0) {
                            // Ha már létezik ilyen felhasználónév, jelenítse meg az üzenetet
                            $scope.showMessage("Ez a felhasználónév már foglalt!");
                        } else {
                            // Ha a felhasználónév még nem foglalt, regisztrálja az új felhasználót
                            let newUser = {
                                name: name,
                                email: email,
                                passwd: passwd
                            }; 
                            axios.post('http://localhost:3000/users', newUser)
                                .then(res =>{
                                    
                                    // Törölje az input mezők tartalmát
                                    document.querySelector('#name').value = "";
                                    document.querySelector('#email').value = "";
                                    document.querySelector('#passwd').value = "";
                                    document.querySelector('#confirm').value = "";
                                    $location.path('/login');
                                    $rootScope.$apply(function() {
                                        $location.path('/login');
                                    });
                                })
                                .catch(err => {
                                    console.error('Regisztrációs hiba:', err);
                                });
                        }
                    })
                    .catch(err => {
                        console.error('Felhasználónév ellenőrzési hiba:', err);
                    });
            }
        }
    };
    
       // Bejelentkezés
    $scope.login = function() {
        // Felhasználónév és jelszó begyűjtése
        let name = document.querySelector('#name').value;
        let passwd = document.querySelector('#passwd').value;
        if (name == ""  || passwd == "" ){
            $scope.showMessage("Nem adtál meg minden adatot!");
        }
        else  {
        // Adatok küldése a szervernek
        axios.post(`http://localhost:3000/logincheck`, { name: name, passwd: passwd })
            .then(res => {
                if (!res.data || Object.keys(res.data).length === 0) {
                    // Hibás bejelentkezési adatok esetén üzenet megjelenítése
                    $scope.showMessage("Hibás belépési adatok!");
                } else {
                    // Sikeres bejelentkezés esetén felhasználó adatainak elmentése a localStorage-ba
                    localStorage.setItem('CookBookUser', JSON.stringify(res.data[0].ID));
                    $rootScope.isLoggedIn = true; // Bejelentkezési állapot beállítása
                    $location.path('/mainPage'); // Átirányítás a főoldalra
                    $rootScope.$apply(function() {
                        $location.path('/mainPage');
                    });
                }
               
            })
            .catch(err => {
                // Hibakezelés
                console.error('Bejelentkezési hiba:', err);
            });
            }
    };


   
    
   
      

    $scope.showMessage = function(msg){
        let alertBox = document.querySelector('#alertBox');
        alertBox.innerHTML = `<strong>HIBA!</strong> ${msg}`;
        alertBox.classList.remove('d-none');
    };

});




