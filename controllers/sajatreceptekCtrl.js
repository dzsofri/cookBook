app.controller('sajatreceptekCtrl', function($scope, $http) {
    $scope.upload = function(){

        let Type1Uj = document.querySelector('#Type1Uj');
        let Type2Uj = document.querySelector('#Type2Uj');
        let newfoodname = document.querySelector('#newfoodname');
        let imageInput = document.querySelector('#imageInput');
        let newrecipe = document.querySelector('#newrecipe');

        let userID = JSON.parse(localStorage.getItem('CookBookUser')).id;
        if (Type1Uj.value == null || Type2Uj.value == null || newfoodname.value == "" || imageInput.value == null || newrecipe.value==""){
            $scope.showMessage("Nem adtál meg minden adatot!");
        }
        else{
            
            
                
                let newRecipe = {
                    userID: userID ,
                    name: newfoodname.value,
                    recipe: newrecipe.value,
                    type1:Type1Uj.value,
                    type2:Type2Uj.value,
                    img:imageInput.files[0]
                }; 
                axios.post('http://localhost:3000/receptek', newRecipe).then(res =>{
                    alert('Recept sikeresen hozzáadva');
                    Type1Uj.value = null;
                    Type2Uj.value = null;
                    newfoodname.value = "";
                    imageInput.value = null;
                    newrecipe.value = "";
                    
                    
                    
                });
            
        }

    };

   $scope.showOwnRecipes = function() {
    // Felhasználó azonosítójának lekérése a localStorage-ból
    let userID = JSON.parse(localStorage.getItem('CookBookUser')).id;
    
    // HTTP kérés a felhasználó saját receptjeinek lekérdezésére az adatbázisból
    axios.get(`http://localhost:3000/receptek/
    `)
        .then(function(response) {
            // Sikeres lekérdezés esetén a válasz tartalmazza a felhasználó saját receptjeit
            let ownRecipes = response.data;
            console.log(ownRecipes); // itt a saját receptekkel dolgozhatsz

            // Példa: Létrehozunk egy DOM elemet minden receptre
            ownRecipes.forEach(function(recipe) {
                if (response.data.userID==userID) {
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
userName.textContent =  JSON.parse(localStorage.getItem('CookBookUser')).name;;

felhasznalo.appendChild(userPhoto);
felhasznalo.appendChild(userName);

const gombok = document.createElement('div');
gombok.classList.add('gombok');

const modositasButton = document.createElement('button');
modositasButton.classList.add('btn', 'btn-primary', 'm-3', 'zold');
modositasButton.textContent = 'Módosítás';

const torlesButton = document.createElement('button');
torlesButton.classList.add('btn', 'btn-primary', 'm-3', 'piros');
torlesButton.textContent = 'Törlés';



$scope.deleteRecipe = function(recipeId) {
    axios.delete(`http://localhost:3000/receptek/${recipeId}`)
        .then(function(response) {
            // Sikeres törlés esetén üzenet megjelenítése
            alert('Recept sikeresen törölve');
            // Újra betöltjük a felhasználó saját receptjeit
            $scope.showOwnRecipes();
        })
        .catch(function(error) {
            // Hibakezelés, ha nem sikerült törölni a receptet
            console.error('Hiba történt a recept törlése során:', error);
        });
};


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

// Div létrehozása a form-labelel és a fájl feltöltő mezővel
const fileUploadGroupDiv = document.createElement('div');
fileUploadGroupDiv.classList.add('mb-3');

// Címke létrehozása
const label = document.createElement('label');
label.setAttribute('for', 'imageInput');
label.classList.add('form-label');
label.textContent = 'Kép kiválasztása';
fileUploadGroupDiv.appendChild(label);

// Fájl feltöltő mező létrehozása
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.classList.add('form-control');
fileInput.id = 'imageInput';
fileInput.src = recipe.img;
fileUploadGroupDiv.appendChild(fileInput);



// Div elem hozzáadása a fő divhez
fileUploadDiv.appendChild(fileUploadGroupDiv);
const inputGroup = document.createElement('div');
inputGroup.classList.add('input-group', 'mb-3', 'selectes');

const input = document.createElement('input');
input.type = 'text';
input.classList.add('form-control');
input.placeholder = 'Étel neve';
input.value = recipe.id;
input.setAttribute('aria-label', 'Username');
input.setAttribute('aria-describedby', 'basic-addon1');

const input2 = document.createElement('input');
input.type = 'text';
input.classList.add('form-control');
input.placeholder = 'Étel neve';
input.value = recipe.name;
input.setAttribute('aria-label', 'Username');
input.setAttribute('aria-describedby', 'basic-addon1');

inputGroup.appendChild(input2);
inputGroup.appendChild(input);
torlesButton.addEventListener('click', function() {
    // Receptek lekérése
    axios.get('http://localhost:3000/receptek')
        .then(res => {
            alert('Receptek sikeresen lekérve');
            
            // Keresés a receptek között
            let recipeIdToDelete = null;
            const recipeNameToDelete = input.value; // Az adott recept neve, amelyet törölni szeretnél
            alert(recipeNameToDelete);
            // Ellenőrizzük, hogy a változó tartalmazza-e a helyes recept nevet
            if (!recipeNameToDelete) {
                console.error('Nem választottál ki receptet a törléshez');
                return;
            }

            res.data.forEach(recipe => {
                if (recipe.name === recipeNameToDelete) {
                    axios.delete(`http://localhost:3000/receptek/${recipe.id}`)
                    .then(function(response) {
                        // Sikeres törlés esetén üzenet megjelenítése
                        alert('Recept sikeresen törölve');
                        // Újra betöltjük a felhasználó saját receptjeit
                        $scope.showOwnRecipes();
                    })
                    .catch(function(error) {
                        // Hibakezelés, ha nem sikerült törölni a receptet
                        console.error('Hiba történt a recept törlése során:', error);
                    });
                }
            });

           
        })
        
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


writecontent.appendChild(felhasznalogomb);
writecontent.appendChild(felso3);
writecontent.appendChild(fileInput);
writecontent.appendChild(colMd6);
                }
                
                
            });
        })
        .catch(function(error) {
            // Hibakezelés, ha nem sikerült lekérni a recepteket
            console.error('Hiba történt a saját receptek lekérdezése során:', error);
        });
};

    
    
    $scope.showOwnRecipes();


   
    




    

});

