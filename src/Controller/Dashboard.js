const message=document.getElementById("welcome_message");
const date=document.getElementById("date");
const balance=document.getElementById("balance");
const transfert=document.getElementById("transferer");
const recharge=document.getElementById("recharger");
const paiement=document.getElementById("payer");
const transactions = document.querySelector(".transactions-table");
const selection=document.getElementById("filterTransactions");
const payerBtn=document.getElementById("payer");

const current=JSON.parse(sessionStorage.getItem("currentUser"));
message.textContent="Bonjour "+current.nom;
balance.textContent=current.balance+" DH";
function afficherTransaction(tab){
    transactions.innerHTML="";

    tab.forEach(element=>{
        const row=document.createElement("tr");
        row.innerHTML=`<td>${element.date}</td>
        <td>${element.title}</td>
        <td>${element.type}</td>
        <td>${element.amount}</td>`;
        transactions.appendChild(row);
    })
}


function filterTransactions(){
    const value=selection.value;
    let filtered;

    if(value==="tout"){
        filtered=current.transactions;
    }else{
        filtered=current.transactions.filter(t=>t.type===value);
    }
    afficherTransaction(filtered);
}

selection.addEventListener("change", filterTransactions);
afficherTransaction(current.transactions);

payerBtn.addEventListener("click",()=>{
    window.location.href="/src/View/payer.html";
});
