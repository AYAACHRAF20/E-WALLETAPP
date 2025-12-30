import { findUser } from "../Model/Data.js";
const emailInput=document.getElementById("mail");
const passInput=document.getElementById("password");
const result=document.getElementById("result");
const submitbtn=document.getElementById("submitbtn");

submitbtn.addEventListener("click",handleLogin);
function handleLogin(){
    let email=emailInput.value;
    let password=passInput.value;
    let user=findUser(email, password);
    submitbtn.textContent="verification...";
    if(!email || !password){
        setTimeout(()=>{
            result.textContent="Veuillez entrer vos informations!!";
            result.style.color="red";
            submitbtn.textContent="Se connecter";
        },2000);
    }

    else{
        if(!user){
            setTimeout(()=>{
                result.textContent="Veuillez verifier vos donnees!!";
                result.style.color="red";
                submitbtn.textContent="Se connecter";
            },2000);
            
        }
        else{
            setTimeout(()=>{
                result.textContent="Success";
                result.style.color="green";
                submitbtn.textContent="Se connecter";
                sessionStorage.setItem("currentUser",JSON.stringify(user));
                window.location.href="/src/View/dashboard.html";
            },2000);
        }
    }
}