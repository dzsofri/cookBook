app.controller('sajatreceptekCtrl', function($scope, $http) {
    
 
    $scope.upload = function() {
        // Új recept létrehozása az űrlap adatai alapján
        let Type1Uj = document.querySelector('#Type1Uj');
        let Type2Uj = document.querySelector('#Type2Uj');
        let newfoodname = document.querySelector('#newfoodname');
        let imageInput = document.querySelector('#imageInput');
        let newrecipe = document.querySelector('#newrecipe');
        let dinamika = document.querySelectorAll('.dinamika');
    
        // Ellenőrizzük, hogy minden adat meg lett-e adva
        if (Type1Uj.value == null || Type2Uj.value == null || newfoodname.value == "" || imageInput.value == null || newrecipe.value == "") {
            $scope.alert("Nem adtál meg minden adatot!");
        } else {
            // Ha minden adat meg van adva, létrehozzuk az új recept objektumot
            let newRecipe = {
                userID: JSON.parse(localStorage.getItem('CookBookUser')),
                name: newfoodname.value,
                recipe: newrecipe.value,
                type1: Type1Uj.value,
                type2: Type2Uj.value,
            };
    
            // Az új recept hozzáadása a szerverhez
            axios.post('http://localhost:3000/receptek', newRecipe)
            .then(res => {
                
               
                // Kép feltöltése a megfelelő mappába, a recept ID-ja alapján
               
                    // Sikeres képfeltöltés esetén kiírjuk az üzenetet
                    alert('Recept sikeresen hozzáadva');
                    // Input mezők tartalmának ürítése
                    Type1Uj.value = null;
                    Type2Uj.value = null;
                    newfoodname.value = "";
                    imageInput.value = null;
                    newrecipe.value = "";
                })
                
           
            .catch(err => {
                // Hibakezelés, ha valami probléma merül fel a recept hozzáadása során
                console.error('Hiba történt a recept hozzáadása során:', err);
            });
        }
    };
    
    $scope.showOwnRecipes = function() {
        const dinamika = document.querySelector('.dinamika');
        dinamika.innerHTML = '';
    
        // Felhasználó azonosítójának lekérése a localStorage-ból
        const user = JSON.parse(localStorage.getItem('CookBookUser'));
        axios.get(`http://localhost:3000/receptek/`).then(function(response) {
            // Sikeres lekérdezés esetén a válasz tartalmazza a felhasználó saját receptjeit
            let ownRecipes = response.data;
            
      
            // Példa: Létrehozunk egy DOM elemet minden receptre
            ownRecipes.forEach(function(recipe) {
                
                if (recipe.userID == user) {
                   
                    // Kiválasztjuk a writecontent osztályú konténert
                    const writecontent = document.querySelector('.writecontent');

                    // Létrehozzuk az elemeket és beállítjuk az attribútumokat
                    const felhasznalogomb = document.createElement('div');
                    felhasznalogomb.classList.add('felhasznalogomb');

                   
                    
                    const felhasznalo = document.createElement('div');
                    felhasznalo.classList.add('felhasznalo');

                    const userPhoto = document.createElement('img');
                    userPhoto.src = '../assets/img/user.jpg';
                    userPhoto.alt = 'UserPhoto';
                    userPhoto.id = 'logo';

                    const userName = document.createElement('div');
                    userName.textContent = JSON.parse(localStorage.getItem('CookBookUser')).name;;

                    felhasznalo.appendChild(userPhoto);
                    felhasznalo.appendChild(userName);

                    const gombok = document.createElement('div');
                    gombok.classList.add('gombok');

                    const modositasButton = document.createElement('button');
                    modositasButton.classList.add('btn', 'btn-primary', 'm-3', 'zold', 'd-none');
                    modositasButton.textContent = 'Módosítás';

                    const torlesButton = document.createElement('button');
                    torlesButton.classList.add('btn', 'btn-primary', 'm-3', 'piros');
                    torlesButton.textContent = 'Törlés';

                    

                    gombok.appendChild(modositasButton);
                    gombok.appendChild(torlesButton);

                    felhasznalogomb.appendChild(felhasznalo);
                    felhasznalogomb.appendChild(gombok);

                    const felso3 = document.createElement('div');
                    felso3.classList.add('felso3');

                    const type1Mod = document.createElement('div');
                    type1Mod.classList.add('input-group', 'mb-3', 'selectes');

                    const select1 = document.createElement('select');
                    select1.classList.add('form-select');
                    select1.id = 'Type1Mod';

                    const option1 = document.createElement('option');
                    option1.value = recipe.type1;

                    if (option1.value === '1') {
                        option1.textContent = 'Reggeli';
                    } else if (option1.value === '2') {
                        option1.textContent = 'Ebéd';
                    } else if (option1.value === '3') {
                        option1.textContent = 'Vacsora';
                    } else {
                        option1.textContent = 'Válassz...';
                    }

                    const option2 = document.createElement('option');
                    option2.value = '1';
                    option2.textContent = 'Reggeli';

                    const option3 = document.createElement('option');
                    option3.value = '2';
                    option3.textContent = 'Ebéd';

                    const option4 = document.createElement('option');
                    option4.value = '3';
                    option4.textContent = 'Vacsora';

                    select1.appendChild(option1);
                    select1.appendChild(option2);
                    select1.appendChild(option3);
                    select1.appendChild(option4);

                    type1Mod.appendChild(select1);

                    const type2Mod = document.createElement('div');
                    type2Mod.classList.add('input-group', 'mb-3', 'selectes');

                    const select2 = document.createElement('select');
                    select2.classList.add('form-select');
                    select2.id = 'Type2Mod';

                    const option5 = document.createElement('option');
                    option5.value = recipe.type2;

                    switch (option5.value) {
                        case '1':
                            option5.textContent = 'Előétel';
                            break;
                        case '2':
                            option5.textContent = 'Főétel';
                            break;
                        case '3':
                            option5.textContent = 'Köret';
                            break;
                        case '4':
                            option5.textContent = 'Desszert';
                            break;
                        case '0':
                            option5.textContent = 'Nem ebéd...';
                            break;
                        default:
                            option5.textContent = 'Válassz...';
                            break;
                    }

                    const option6 = document.createElement('option');
                    option6.value = '1';
                    option6.textContent = 'Előétel';

                    const option7 = document.createElement('option');
                    option7.value = '2';
                    option7.textContent = 'Főétel';

                    const option8 = document.createElement('option');
                    option8.value = '3';
                    option8.textContent = 'Köret';

                    const option9 = document.createElement('option');
                    option9.value = '3';
                    option9.textContent = 'Desszert';

                    const option10 = document.createElement('option');
                    option10.value = '0';
                    option10.textContent = 'Nem ebéd...';

                    select2.appendChild(option5);
                    select2.appendChild(option6);
                    select2.appendChild(option7);
                    select2.appendChild(option8);
                    select2.appendChild(option9);
                    select2.appendChild(option10);

                    type2Mod.appendChild(select2);
                    const fileUploadDiv = document.createElement('div');

                    // H1 cím hozzáadása
                    const h1 = document.createElement('h1');
                    h1.textContent = 'Kép feltöltése';

                    fileUploadDiv.appendChild(h1);
const fileUploadGroupDiv = document.createElement('div');
                    fileUploadGroupDiv.classList.add('mb-3');
                    fileUploadGroupDiv.style.display='flex';
                    fileUploadGroupDiv.style.justifyContent='center';
                    fileUploadGroupDiv.style.height = '400px';
                    const longbobImage = document.createElement('img');
                    longbobImage.src = `..//assets/img/receptképek/${recipe.ID}.jpg`;
                    longbobImage.alt = recipe.name;
                    longbobImage.classList.add('longbob-image');
                    fileUploadGroupDiv.appendChild(longbobImage);
                    
                  

                    // Div létrehozása a form-labelel és a fájl feltöltő mezővel
                    

                    // Címke létrehozása
                    

                    // Fájl feltöltő mező létrehozása
                    
                    
                   

                    // Div elem hozzáadása a fő divhez
                    fileUploadDiv.appendChild(fileUploadGroupDiv);
                    const inputGroup = document.createElement('div');
                    inputGroup.classList.add('input-group', 'mb-3', 'selectes');


                    const input2 = document.createElement('input');
                    input2.type = 'text';
                    input2.classList.add('form-control');
                    input2.placeholder = 'Étel neve';
                    input2.value = recipe.name;
                    input2.setAttribute('aria-label', 'Username');
                    input2.setAttribute('aria-describedby', 'basic-addon1');

                    inputGroup.appendChild(input2);
                    
                    torlesButton.addEventListener('click', function() {
                        
                      console.log(recipe.ID);
                      const confirmation = confirm("Biztosan szeretnéd törölni ezt a receptet?");
                        
                        if (confirmation) {
                        axios.delete(`http://localhost:3000/receptek/${recipe.ID}`)
                        .then(response => {
                            if (response.status === 200) {
                                $scope.showOwnRecipes();
                            }
                        })
                        .catch(error => {
                            console.error('Hiba történt a recept törlése során:', error);
                        });}
                        else{}

                    });
                    modositasButton.addEventListener('click', function() {
                        // Módosítás gombra kattintva megjelenítjük a felugró ablakot
                        const confirmation = confirm("Biztosan szeretnéd módosítani ezt a receptet?");
                        
                        if (confirmation) {
                            // Felugró ablak elfogadása esetén
                            // Elkérjük a felhasználó által módosított adatokat (például egy űrlap segítségével)
                            // Majd elküldjük ezeket az adatokat az adatbázisba a recept módosításához
                            const modifiedRecipe = {
                                ID:recipe.ID,
                                userID:JSON.parse(localStorage.getItem('CookBookUser')),
                                name: input2.value, // Az étel nevének módosítása az input mező értékével
                                recipe: textarea.value, // A recept módosítása a textarea értékével
                                type1: select1.value, // Az első típus módosítása a select1 értékével
                                type2: select2.value // A második típus módosítása a select2 értékével
                                // Egyéb módosítások...
                            };
                            console.log(modifiedRecipe)
                            // Axios segítségével küldjük el a módosított receptet a szerverre
                            axios.post(`http://localhost:3000/receptek/${recipe.ID}`, modifiedRecipe)
                            .then(response => {
                                // Sikeres módosítás esetén frissítsük az adatokat a felületen
                                alert('Recept sikeresen módosítva');
                                // Esetlegesen frissíthetjük a felhasználói felületet, hogy az új adatok megjelenjenek
                            })
                            .catch(error => {
                                // Hibakezelés, ha valami nem sikerült a módosítás során
                                console.error('Hiba történt a recept módosítása során:', error);
                            });





                            
                        } else {
                            // Felugró ablak elutasítása esetén nem kell semmit tenni
                        }
                    });
                    

                    felso3.appendChild(type1Mod);
                    felso3.appendChild(type2Mod);
                    felso3.appendChild(inputGroup);

                    const colMd6 = document.createElement('div');
                    colMd6.classList.add('col-md-6');
                    colMd6.style.marginLeft = '2.5%';

                    const textarea = document.createElement('textarea');
                    textarea.classList.add('form-control', 'nagyinput');
                    textarea.style.height = '200px';
                    textarea.placeholder = 'Ide írd a receptet...';
                    textarea.value = recipe.recipe;
                    colMd6.appendChild(textarea);
                  

                    dinamika.appendChild(felhasznalogomb);
                    dinamika.appendChild(felso3);
                    dinamika.appendChild(fileUploadGroupDiv);
                   
                    dinamika.appendChild(colMd6);

                   
             
              
            }
                });   
        }).catch(function(error) {
            // Hibakezelés, ha nem sikerült lekérni a recepteket
            console.error('Hiba történt a saját receptek lekérdezése során:', error);
        });
    };
   

   
    $scope.showOwnRecipes();
    
});
