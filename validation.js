
function validationLogin(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "test@gmail.com" && password === "pass@111"){        
        
        alert("You are Login");
    }else{
        alert("Wrong credentials...");
    }
}

