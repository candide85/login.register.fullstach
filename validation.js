
function validationLogin(){
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(email === "test@gmail.com" && password === "pass@111"){        
        
        alert("You are Login");
    }else{
        alert("Wrong credentials...");
    }
}


function validationRegister(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;

    if(email === "" || password === ""  || fname === "" || lname === ""){
        alert("fill all the field before submitting")
    }else{        
        alert("Register successfully");
        
    }
}


function loginBtn(){
    document.getElementById("login").onclick = function(){
            location.href = "/login"
    };
}
