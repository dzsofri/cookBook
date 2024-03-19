

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
    

    function login(){
        let name = document.querySelector('#name');
        let passwd = document.querySelector('#passwd');
    
        if (name.value == "" || passwd.value == "" ){
            showMessage("Nem adtál meg minden adatot!");
        }
        else{
            let data = {
                name: name.value,
                passwd: passwd.value
            }
            axios.post(`http://localhost:3000/logincheck`, data).then(res => {
                if(res.data.length == 0){
                    showMessage("Hibás belépési adatok!");
                }else
                {
                    sessionStorage.setItem('CookBook', JSON.stringify(res.data[0]));
                    document.location.href='index.html';
                }
            })
        }
    }
    
    
    function logout(){
        sessionStorage.removeItem('CookBook');
        document.location.href='index.html';
    }

