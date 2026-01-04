import { recharger } from "../Service/rechargeService.js";
const cardIdInput=document.getElementById("cardId");
const montantInput=document.getElementById("amount");
const rechargeBtn=document.getElementById("rechargeBtn");
let user=JSON.parse(sessionStorage.getItem("currentUser"));
rechargeBtn.addEventListener("click", handleRecharge);

async function handleRecharge(){
    let cardId=parseInt(cardIdInput.value);
    let montant=parseFloat(montantInput.value);
    if(isNaN(cardId)){
        alert("Veuillez entrer un ID de carte valide!!!");
    }
    if(isNaN(montant) || montant<=0){
        alert("Veuillez entrer un montant valide!!");
    }
    try{
        await recharger(user, cardId, montant);
        alert(`Recharge reussie! Nouveau solde de compte: ${user.balance} DH`);
        window.location.href="/src/View/dashboard.html";
    }catch(error){
        alert(error);
    }
}
