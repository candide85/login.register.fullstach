
function validationLogin(){
    const email = document.getElementById("email").value;
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
    const fname = document.getElementById("f-name").value;
    const lname = document.getElementById("l-name").value;

    if(email === "" || password === ""  || fname === "" || lname === ""){
        alert("fill all the field before submitting")
    }else{        
        alert("Register successfully");
    }
}

