let localStrVal = localStorage.getItem("users")
let users =  [];

if(localStrVal){
   users = JSON.parse(localStrVal)
}

function registerAccount(){
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regex.test(userPassword)){ 

        let userObj = {
            name        :   userName,
            email       :  userEmail,
            password    :   userPassword
        }
        
        users.push(userObj)
        
        let convertUserToStr = JSON.stringify(users);
        localStorage.setItem("users", convertUserToStr);
        window.location.pathname = "/login-register-form-js/index.html";

    }else{
        document.getElementById("weakPassword").innerText = `Weak Password, Try Strong Password For Signup! ex. Password must contains a upparcase, a lowercase, a number, special character and atleast 8 digit    `
    }
}

function loginAccount(){
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    let currentUser = null;
    for(let i=0; i<users.length; i++){
         if(users[i].email == userEmail){
            currentUser = users[i]
            break;
         }
    }

    if(currentUser){
        if(currentUser.password == userPassword){
            window.location.pathname = "/login-register-form-js/dashboard.html";
        }else{
            alert("Password did not matched")
        }
    }else{
        alert("Account Not Register with this email")
    }
}