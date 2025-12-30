import{findDest} from "../Model/Data.js";
const nomDest=document.getElementById("nomDest");
const montantPaye=document.getElementById("montantPaye");
const payerBtn=document.getElementById("payerBtn");

const currentUser= JSON.parse(sessionStorage.getItem("currentUser"));

payerBtn.addEventListener("click", handlePay);

function checkDest(dest){
    return new Promise((resolve, reject)=>{
        if(dest){
            resolve(dest);
        }else{
            reject("le destinaire n'existe pas!");
        }
    });
}


function checkSolde(user, montant){
    return new Promise((resolve, reject)=>{
        if(montant<=0){
            reject("le montant a payer est invalide!");
        }else if(montant >user.balance){
            reject("le solde est insuffisant!");
        }else{
            resolve({user, montant});
        }
    });
}

function addTransaction(user, dest, montant){
    return new Promise((resolve, reject)=>{
        if(!user || !dest){
            reject("utilisateur ou destinataire invalide!");
        }
        if(!user.transactions){
            user.transactions=[];
        }
        const transaction={
            type:"-",
            title:`Paiement à ${dest.nom}`,
            date: new Date(),
            amount: montant,
            status: "success"
        };
        user.transactions.push(transaction);
        console.log("Transaction ajoutee: ",transaction);
        resolve(user);
    });
}

function updateSolde(user, montant){
    return new Promise((resolve)=>{
        user.balance-=montant;
        resolve(user.balance);
    });
}

function handlePay(){
    const dest=findDest(nomDest.value, ribDest.value);
    const montant=parseFloat(montantPaye.value);

    checkDest(dest)
        .then(destinataire => checkSolde(currentUser, montant).then(data => ({ ...data, destinataire })))
        .then(({ user, montant, destinataire }) => addTransaction(user, destinataire, montant))
        .then(user => updateSolde(user, parseFloat(montantPaye.value)))
        .then(newBalance => {
            alert(`Paiement effectué ! Nouveau solde : ${newBalance} DH`);
            sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
        })
        .catch(err => {
            alert(err);
        });
}