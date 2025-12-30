const users=[
    {email: "Ali@gmail.com", password:"1234",nom:"Ali",balance: 12000.00, RIB: "AB1234" ,transactions:[
        { type: "-", title: "achat en ligne", date:"25 Dec 9:34", amount: 300, status: "success"},
        { type: "+", title:"a: Ahmed", date: "25 Dec 9:36", amount: 270, status: "success"},
        { type:"+", title:"restaurant", date:"25 Dec 9:37", amount: 110, status: "failed"}
    ]},

    {email: "Ahmed@gmail.com", password:"abcd",nom:"Ahmed",balance: 15000.00, RIB: "AA2353", transactions:[
        { type: "-", title: "achat en ligne", date:"25 Dec 9:34", amount: 300, status: "success"},
        { type: "+", title:"shopping", date: "25 Dec 9:36", amount: 270, status: "success"},
        { type:"+", title:"disneyLand", date:"25 Dec 9:37", amount: 110, status: "failed"}
    ]},

    {email: "siham@gmail.com", password:"ab12",nom:"Siham",balance: 12000.00, RIB: "AD1332", transactions:[
        { type: "-", title: "achat en ligne", date:"25 Dec 9:34", amount: 300, status: "success"},
        { type: "+", title:"a: ali", date: "25 Dec 9:36", amount: 270, status: "success"},
        { type:"+", title:"restaurant", date:"25 Dec 9:37", amount: 110, status: "failed"}
    ]}
];

function findUser(mail,pass){
    let user=null;
    user=users.find(u => u.email===mail && u.password===pass);
    return user;
}

function findDest(name, rib){
    let dest=null;
    dest=users.find(d=>d.nom===name && d.RIB===rib);
    return dest;
}
export{findUser};
export{findDest};