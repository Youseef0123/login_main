
var logOut=document.getElementById("logOut");
var userWelcom=document.getElementById("userWelcom");
var userName=localStorage.getItem("userName")
var collection=[];

if(localStorage.getItem("collects")!=null){
collection=JSON.parse(localStorage.getItem("collects") )
}


logOut.addEventListener("click", function(){

localStorage.removeItem("userName")


window.location="./index.html"

} )
