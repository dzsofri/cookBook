app.controller('dinamikusCtrl', function($scope, $http) {
    
    $scope.reggeli = function() {
        // Receptek lekérdezése az adatbázisból
        axios.get('http://localhost:3000/receptek').then(function(response) {
            let receptek = response.data; // Receptek tömb feltöltése a lekért adatokkal
            receptek.forEach(function(recipe) {
                if (recipe.type1 == 1 && recipe.type2==0) {
                    // Kártya elem létrehozása és stílusainak beállítása
                    let cardDiv = document.createElement("div");
                    cardDiv.classList.add("card");
    
                    // Kártya kép elem létrehozása és forrásának beállítása
                    let cardImage = document.createElement("div");
                    cardImage.classList.add("card-image");
                    let image = document.createElement("img");
                    image.src = `../assets/img/receptképek/${recipe.ID}.jpg`;
                    image.alt = ""; // Adj hozzá az alt attribútumot, ha szükséges
                    cardImage.appendChild(image);
                    cardDiv.appendChild(cardImage);
                    
                    // Kártya szöveg elem létrehozása és tartalmának beállítása
                    let cardText = document.createElement("div");
                    cardText.classList.add("card-text");
                    let cardName = document.createElement("div");
                    cardName.classList.add("card-name");
                    let cardRecipe = document.createElement("div");
                    cardRecipe.classList.add("card-recipe");
                    cardText.classList.add("card-text");
                    cardName.textContent = recipe.name;
                    cardText.appendChild(cardName);
                    cardText.appendChild(cardRecipe);
                    cardDiv.appendChild(cardText);
                    // Preprocesszáljuk a recept szövegét, hogy a sortöréseket és tabulátorokat megfelelő HTML kódokra cseréljük
                    let formattedRecipe = recipe.recipe.replace(/\n/g, "<br>").replace(/\t/g, "&emsp;");
    
                    // Ha a recept hossza meghaladja a 150 karaktert, csak az első 150 karaktert jelenítjük meg
                    if (formattedRecipe.length > 150) {
                        cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                        let readMoreButton = document.createElement("button");
                        readMoreButton.textContent = "Olvasd tovább!";
                        readMoreButton.addEventListener('click', function() {
                            if (cardRecipe.classList.contains("expanded")) {
                                cardRecipe.classList.remove("expanded");
                                cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                                readMoreButton.textContent = "Olvasd tovább!";
                            } else {
                                cardRecipe.classList.add("expanded");
                                cardRecipe.innerHTML = formattedRecipe;
                                readMoreButton.textContent = "Összecsuk";
                            }
                        });
                        cardText.appendChild(readMoreButton);
                    } else {
                        cardRecipe.innerHTML = formattedRecipe; // Teljes recept megjelenítése
                    }
    
                    
    
                    // A kész kártya elem hozzáadása az oldalhoz (pl. egy tartalomhoz vagy egy konténerhez)
                    let cards = document.querySelector(".cards"); // A konténer kiválasztása az oldalon
                    cards.appendChild(cardDiv);
                }
            });
        }, function(error) {
            console.error('Hiba történt a receptek lekérdezése során:', error);
        });
    };
    $scope.vacsora = function() {
        // Receptek lekérdezése az adatbázisból
        axios.get('http://localhost:3000/receptek').then(function(response) {
            let receptek = response.data; // Receptek tömb feltöltése a lekért adatokkal
            receptek.forEach(function(recipe) {
                if (recipe.type1 == 3 && recipe.type2==0) {
                    // Kártya elem létrehozása és stílusainak beállítása
                    let cardDiv = document.createElement("div");
                    cardDiv.classList.add("card");
    
                    // Kártya kép elem létrehozása és forrásának beállítása
                    let cardImage = document.createElement("div");
                    cardImage.classList.add("card-image");
                    let image = document.createElement("img");
                    image.src = `../assets/img/receptképek/${recipe.ID}.jpg`;
                    image.alt = ""; // Adj hozzá az alt attribútumot, ha szükséges
                    cardImage.appendChild(image);
                    cardDiv.appendChild(cardImage);
    
                    // Kártya szöveg elem létrehozása és tartalmának beállítása
                    let cardText = document.createElement("div");
                    cardText.classList.add("card-text");
                    let cardName = document.createElement("div");
                    cardName.classList.add("card-name");
                    let cardRecipe = document.createElement("div");
                    cardRecipe.classList.add("card-recipe");
                    cardText.classList.add("card-text");
                    cardName.textContent = recipe.name;
                    cardText.appendChild(cardName);
                    cardText.appendChild(cardRecipe);
                    cardDiv.appendChild(cardText);
                    // Preprocesszáljuk a recept szövegét, hogy a sortöréseket és tabulátorokat megfelelő HTML kódokra cseréljük
                    let formattedRecipe = recipe.recipe.replace(/\n/g, "<br>").replace(/\t/g, "&emsp;");
    
                    // Ha a recept hossza meghaladja a 150 karaktert, csak az első 150 karaktert jelenítjük meg
                    if (formattedRecipe.length > 150) {
                        cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                        let readMoreButton = document.createElement("button");
                        readMoreButton.textContent = "Olvasd tovább!";
                        readMoreButton.addEventListener('click', function() {
                            if (cardRecipe.classList.contains("expanded")) {
                                cardRecipe.classList.remove("expanded");
                                cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                                readMoreButton.textContent = "Olvasd tovább!";
                            } else {
                                cardRecipe.classList.add("expanded");
                                cardRecipe.innerHTML = formattedRecipe;
                                readMoreButton.textContent = "Összecsuk";
                            }
                        });
                        cardText.appendChild(readMoreButton);
                    } else {
                        cardRecipe.innerHTML = formattedRecipe; // Teljes recept megjelenítése
                    }
    
                    
    
                    // A kész kártya elem hozzáadása az oldalhoz (pl. egy tartalomhoz vagy egy konténerhez)
                    let cards = document.querySelector(".cards"); // A konténer kiválasztása az oldalon
                    cards.appendChild(cardDiv);
                }
            });
        }, function(error) {
            console.error('Hiba történt a receptek lekérdezése során:', error);
        });
    };
    
    $scope.eloetel = function() {
        // Receptek lekérdezése az adatbázisból
        axios.get('http://localhost:3000/receptek').then(function(response) {
            let receptek = response.data; // Receptek tömb feltöltése a lekért adatokkal
            receptek.forEach(function(recipe) {
                if (recipe.type2 == 1 && recipe.type1 == 2 ) {
                    // Kártya elem létrehozása és stílusainak beállítása
                    let cardDiv = document.createElement("div");
                    cardDiv.classList.add("card");
    
                    // Kártya kép elem létrehozása és forrásának beállítása
                    let cardImage = document.createElement("div");
                    cardImage.classList.add("card-image");
                    let image = document.createElement("img");
                    image.src = `../assets/img/receptképek/${recipe.ID}.jpg`;
                    image.alt = ""; // Adj hozzá az alt attribútumot, ha szükséges
                    cardImage.appendChild(image);
                    cardDiv.appendChild(cardImage);
    
                    // Kártya szöveg elem létrehozása és tartalmának beállítása
                    let cardText = document.createElement("div");
                    cardText.classList.add("card-text");
                    let cardName = document.createElement("div");
                    cardName.classList.add("card-name");
                    let cardRecipe = document.createElement("div");
                    cardRecipe.classList.add("card-recipe");
                    cardText.classList.add("card-text");
                    cardName.textContent = recipe.name;
                    cardText.appendChild(cardName);
                    cardText.appendChild(cardRecipe);
                    cardDiv.appendChild(cardText);
    
                    // Preprocesszáljuk a recept szövegét, hogy a sortöréseket és tabulátorokat megfelelő HTML kódokra cseréljük
                    let formattedRecipe = recipe.recipe.replace(/\n/g, "<br>").replace(/\t/g, "&emsp;");
    
                    // Ha a recept hossza meghaladja a 150 karaktert, csak az első 150 karaktert jelenítjük meg
                    if (formattedRecipe.length > 150) {
                        cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                        let readMoreButton = document.createElement("button");
                        readMoreButton.textContent = "Olvasd tovább!";
                        readMoreButton.addEventListener('click', function() {
                            if (cardRecipe.classList.contains("expanded")) {
                                cardRecipe.classList.remove("expanded");
                                cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                                readMoreButton.textContent = "Olvasd tovább!";
                            } else {
                                cardRecipe.classList.add("expanded");
                                cardRecipe.innerHTML = formattedRecipe;
                                readMoreButton.textContent = "Összecsuk";
                            }
                        });
                        cardText.appendChild(readMoreButton);
                    } else {
                        cardRecipe.innerHTML = formattedRecipe; // Teljes recept megjelenítése
                    }
    
                 
                    // A kész kártya elem hozzáadása az oldalhoz (pl. egy tartalomhoz vagy egy konténerhez)
                    let cards = document.querySelector(".cards"); // A konténer kiválasztása az oldalon
                    cards.appendChild(cardDiv);
                }
            });
        }, function(error) {
            console.error('Hiba történt a receptek lekérdezése során:', error);
        });
    };
   

    $scope.foetel = function() {
        // Receptek lekérdezése az adatbázisból
        axios.get('http://localhost:3000/receptek').then(function(response) {
            let receptek = response.data; // Receptek tömb feltöltése a lekért adatokkal
            receptek.forEach(function(recipe) {
                if (recipe.type2 == 2 && recipe.type1 == 2 ) {
                    // Kártya elem létrehozása és stílusainak beállítása
                    let cardDiv = document.createElement("div");
                    cardDiv.classList.add("card");
    
                    // Kártya kép elem létrehozása és forrásának beállítása
                    let cardImage = document.createElement("div");
                    cardImage.classList.add("card-image");
                    let image = document.createElement("img");
                    image.src = `../assets/img/receptképek/${recipe.ID}.jpg`;
                    image.alt = ""; // Adj hozzá az alt attribútumot, ha szükséges
                    cardImage.appendChild(image);
                    cardDiv.appendChild(cardImage);
    
                    // Kártya szöveg elem létrehozása és tartalmának beállítása
                    let cardText = document.createElement("div");
                    cardText.classList.add("card-text");
                    let cardName = document.createElement("div");
                    cardName.classList.add("card-name");
                    let cardRecipe = document.createElement("div");
                    cardRecipe.classList.add("card-recipe");
                    cardText.classList.add("card-text");
                    cardName.textContent = recipe.name;
                    cardText.appendChild(cardName);
                    cardText.appendChild(cardRecipe);
                    cardDiv.appendChild(cardText);
                    // Preprocesszáljuk a recept szövegét, hogy a sortöréseket és tabulátorokat megfelelő HTML kódokra cseréljük
                    let formattedRecipe = recipe.recipe.replace(/\n/g, "<br>").replace(/\t/g, "&emsp;");
    
                    // Ha a recept hossza meghaladja a 150 karaktert, csak az első 150 karaktert jelenítjük meg
                    if (formattedRecipe.length > 150) {
                        cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                        let readMoreButton = document.createElement("button");
                        readMoreButton.textContent = "Olvasd tovább!";
                        readMoreButton.addEventListener('click', function() {
                            if (cardRecipe.classList.contains("expanded")) {
                                cardRecipe.classList.remove("expanded");
                                cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                                readMoreButton.textContent = "Olvasd tovább!";
                            } else {
                                cardRecipe.classList.add("expanded");
                                cardRecipe.innerHTML = formattedRecipe;
                                readMoreButton.textContent = "Összecsuk";
                            }
                        });
                        cardText.appendChild(readMoreButton);
                    } else {
                        cardRecipe.innerHTML = formattedRecipe; // Teljes recept megjelenítése
                    }
    
                    
    
                    // A kész kártya elem hozzáadása az oldalhoz (pl. egy tartalomhoz vagy egy konténerhez)
                    let cards = document.querySelector(".cards"); // A konténer kiválasztása az oldalon
                    cards.appendChild(cardDiv);
                }
            });
        }, function(error) {
            console.error('Hiba történt a receptek lekérdezése során:', error);
        });
    };
  
    
    $scope.koret = function() {
        // Receptek lekérdezése az adatbázisból
        axios.get('http://localhost:3000/receptek').then(function(response) {
            let receptek = response.data; // Receptek tömb feltöltése a lekért adatokkal
            receptek.forEach(function(recipe) {
                if (recipe.type2 == 3 && recipe.type1 == 2 ) {
                    // Kártya elem létrehozása és stílusainak beállítása
                    let cardDiv = document.createElement("div");
                    cardDiv.classList.add("card");
    
                    // Kártya kép elem létrehozása és forrásának beállítása
                    let cardImage = document.createElement("div");
                    cardImage.classList.add("card-image");
                    let image = document.createElement("img");
                    image.src = `../assets/img/receptképek/${recipe.ID}.jpg`;
                    image.alt = ""; // Adj hozzá az alt attribútumot, ha szükséges
                    cardImage.appendChild(image);
                    cardDiv.appendChild(cardImage);
    
                    // Kártya szöveg elem létrehozása és tartalmának beállítása
                    let cardText = document.createElement("div");
                    cardText.classList.add("card-text");
                    let cardName = document.createElement("div");
                    cardName.classList.add("card-name");
                    let cardRecipe = document.createElement("div");
                    cardRecipe.classList.add("card-recipe");
                    cardText.classList.add("card-text");
                    cardName.textContent = recipe.name;
                    cardText.appendChild(cardName);
                    cardText.appendChild(cardRecipe);
                    cardDiv.appendChild(cardText);
    
                    // Preprocesszáljuk a recept szövegét, hogy a sortöréseket és tabulátorokat megfelelő HTML kódokra cseréljük
                    let formattedRecipe = recipe.recipe.replace(/\n/g, "<br>").replace(/\t/g, "&emsp;");
    
                    // Ha a recept hossza meghaladja a 150 karaktert, csak az első 150 karaktert jelenítjük meg
                    if (formattedRecipe.length > 150) {
                        cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                        let readMoreButton = document.createElement("button");
                        readMoreButton.textContent = "Olvasd tovább!";
                        readMoreButton.addEventListener('click', function() {
                            if (cardRecipe.classList.contains("expanded")) {
                                cardRecipe.classList.remove("expanded");
                                cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                                readMoreButton.textContent = "Olvasd tovább!";
                            } else {
                                cardRecipe.classList.add("expanded");
                                cardRecipe.innerHTML = formattedRecipe;
                                readMoreButton.textContent = "Összecsuk";
                            }
                        });
                        cardText.appendChild(readMoreButton);
                    } else {
                        cardRecipe.innerHTML = formattedRecipe; // Teljes recept megjelenítése
                    }
    
                    
    
                    // A kész kártya elem hozzáadása az oldalhoz (pl. egy tartalomhoz vagy egy konténerhez)
                    let cards = document.querySelector(".cards"); // A konténer kiválasztása az oldalon
                    cards.appendChild(cardDiv);
                }
            });
        }, function(error) {
            console.error('Hiba történt a receptek lekérdezése során:', error);
        });
    };
    
    $scope.desszert = function() {
        // Receptek lekérdezése az adatbázisból
        axios.get('http://localhost:3000/receptek').then(function(response) {
            let receptek = response.data; // Receptek tömb feltöltése a lekért adatokkal
            receptek.forEach(function(recipe) {
                if (recipe.type2 == 4 && recipe.type1 == 2 ) {
                    // Kártya elem létrehozása és stílusainak beállítása
                    let cardDiv = document.createElement("div");
                    cardDiv.classList.add("card");
    
                    // Kártya kép elem létrehozása és forrásának beállítása
                    let cardImage = document.createElement("div");
                    cardImage.classList.add("card-image");
                    let image = document.createElement("img");
                    image.src = `../assets/img/receptképek/${recipe.ID}.jpg`;
                    image.alt = ""; // Adj hozzá az alt attribútumot, ha szükséges
                    cardImage.appendChild(image);
                    cardDiv.appendChild(cardImage);
    
                    // Kártya szöveg elem létrehozása és tartalmának beállítása
                    let cardText = document.createElement("div");
                    cardText.classList.add("card-text");
                    let cardName = document.createElement("div");
                    cardName.classList.add("card-name");
                    let cardRecipe = document.createElement("div");
                    cardRecipe.classList.add("card-recipe");
                    cardText.classList.add("card-text");
                    cardName.textContent = recipe.name;
                    cardText.appendChild(cardName);
                    cardText.appendChild(cardRecipe);
                    cardDiv.appendChild(cardText);
                    // Preprocesszáljuk a recept szövegét, hogy a sortöréseket és tabulátorokat megfelelő HTML kódokra cseréljük
                    let formattedRecipe = recipe.recipe.replace(/\n/g, "<br>").replace(/\t/g, "&emsp;");
    
                    // Ha a recept hossza meghaladja a 150 karaktert, csak az első 150 karaktert jelenítjük meg
                    if (formattedRecipe.length > 150) {
                        cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                        let readMoreButton = document.createElement("button");
                        readMoreButton.textContent = "Olvasd tovább!";
                        readMoreButton.addEventListener('click', function() {
                            if (cardRecipe.classList.contains("expanded")) {
                                cardRecipe.classList.remove("expanded");
                                cardRecipe.innerHTML = formattedRecipe.substring(0, 150) + "...";
                                readMoreButton.textContent = "Olvasd tovább!";
                            } else {
                                cardRecipe.classList.add("expanded");
                                cardRecipe.innerHTML = formattedRecipe;
                                readMoreButton.textContent = "Összecsuk";
                            }
                        });
                        cardText.appendChild(readMoreButton);
                    } else {
                        cardRecipe.innerHTML = formattedRecipe; // Teljes recept megjelenítése
                    }
    
                    
    
                    // A kész kártya elem hozzáadása az oldalhoz (pl. egy tartalomhoz vagy egy konténerhez)
                    let cards = document.querySelector(".cards"); // A konténer kiválasztása az oldalon
                    cards.appendChild(cardDiv);
                }
            });
        }, function(error) {
            console.error('Hiba történt a receptek lekérdezése során:', error);
        });
    };


});