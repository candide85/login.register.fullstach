
function validationLogin(){
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(email === localStorage.getItem("email") && password === localStorage.getItem("password")){        
        
        alert("You are Login");
    }else{
        alert("Wrong credentials...");
    }
}



function validationRegister(){
    
    const email = document.getElementById("email").value;
    console.log(email);
    const password = document.getElementById("password").value;
    const emailStore = localStorage.setItem("email",email)
    const passwordStore = localStorage.setItem("password",password) 
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;

    if(email === "" || password === ""  || fname === "" || lname === ""){
        alert("fill all the field before submitting")
    }else{                
        window.location.href = "index.html";
        // alert("Register successfully");
        
    }
}


