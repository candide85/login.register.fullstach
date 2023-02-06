
// function validationLogin(){
    
//     const email = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     if(email === "joel@gmail.com" && password === "12345"){        
        
//         window.location.assign("home.html");      
//         alert("You are Login");
//     }else{
//         alert("Wrong credentials...");
//         return;
//     }
// }



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
        
        alert("Register successfully");
        
    }
}




function logout(){
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "index.html";
}