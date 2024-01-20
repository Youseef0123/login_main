



var nameInput=document.getElementById("nameInput");
var emailInput=document.getElementById("emailInput");
var passInput=document.getElementById("passInput");
var btnSignup=document.getElementById("btnSignup");
var signIn =document.getElementById("signIn");
var exist=document.getElementById("exist");
var sucsess=document.getElementById("sucsess")
var collection=[];
var alerUrl=document.getElementById("alerUrl")
if(localStorage.getItem("collects")!=null){
collection=JSON.parse(localStorage.getItem("collects") )
}


function emailExsit(){

    var checkEmail=emailInput.value;
    for(var i=0 ; i < collection.length ; i++){
        if(checkEmail==collection[i].email){
            return true;
        }
    
    }
    return false;
    
    }

btnSignup.addEventListener("click" , function(e){

    if(emailExsit()==true){
        exist.classList.remove("d-none");
        sucsess.classList.add("d-none");
        
    }
    else{
        addLocal();
        exist.classList.add("d-none");
        clearData()
        
    }


})



function addLocal(){
var collect={
name:nameInput.value,
email:emailInput.value,
pass:passInput.value
}
if(validatEmail(collect)==true){
    collection.push(collect);
    localStorage.setItem("collects" , JSON.stringify(collection))
    
    window.location="./signin.html"
}else{
   
    alerUrl.classList.remove("d-none")
}


}
 
function validatEmail(collect){
    var regix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm;

 
if(regix.test(collect.email)){
   
   
    return true;
}
else{
    return false;
}


}




function clearData(){

    nameInput.value="";
    emailInput.value="";
    passInput.value="";

}





signIn.addEventListener("click" , function (e) {

    window.location="./signin.html"
})





