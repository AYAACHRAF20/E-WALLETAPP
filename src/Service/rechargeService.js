function getCard(user, cardId){
    return new Promise((resolve, reject)=>{
        const card=user.cards.find(c=>c.id===cardId);
        if(card){
            resolve(card);
        }else{
            reject(`La carte ${cardId} est invalide ou non disponible`);
        }
    });
}

function rechargeCard(user, cardId, montant){
    return new Promise((resolve, reject)=>{
        const card=user.cards.find(c=>c.id===cardId);
        if(!card){
            reject(`la carte ${cardId} est invalide`);
            return;
        }
        if(montant<=0){
            reject(`Montant invalide`);
            return;
        }
        card.balance+=montant;
        user.balance=user.cards.reduce((sum,c)=>sum+c.balance,0);
        resolve(card);
    });
}

function addTransaction(user, montant, cardId){
    return new Promise((resolve, reject)=>{
        if(!user || montant<=0){
            reject("Impossible d'ajouter la transaction!");
            return;
        }
        const transaction={
            type: "+", 
            title: `Recharge de la carte ${cardId}`, 
            date:new Date().toLocaleString(), 
            amount: montant, 
            status: "success"
        };
        user.transactions.push(transaction);
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        resolve(transaction);
    });
}

async function recharger(user, cardId, montant){
    await getCard(user, cardId);
    await rechargeCard(user, cardId, montant);
    await addTransaction(user, montant, cardId);
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    return user;
}

export{recharger};
