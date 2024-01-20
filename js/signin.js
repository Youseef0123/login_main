



var emailLog=document.getElementById("emailLog");
var passLog=document.getElementById("passLog");

var btnLogg =document.getElementById("btnLogg");
var alertt=document.getElementById("alert-vip");  
var signUp=document.getElementById("signUp");
var collection=[];

if(localStorage.getItem("collects")!=null){
    collection=JSON.parse(localStorage.getItem("collects") );
    }

function checkLogIn(){

    var email=emailLog.value;
    var pass=passLog.value;

  for(var i=0 ; i < collection.length ; i++){

if(collection[i].email==email  && collection[i].pass==pass ){
localStorage.setItem("userName", JSON.stringify(collection[i].name))
return true;
}

  } 
  return false;
}


btnLogg.addEventListener("click" , function(e){

    if(checkLogIn()==true){
       window.location="./welcom.html"
    }
    else{
        alert("gmail or passwaor is invalid")
        alertt.classList.remove("d-none")
    }

})


signUp.addEventListener("click" , function(){

window.location="./index.html"

})
