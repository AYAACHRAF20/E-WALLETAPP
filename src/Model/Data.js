const users=[
    {email: "Ali@gmail.com", password:"1234",nom:"Ali",balance: 12000.00, RIB: "AB1234" ,transactions:[
        { type: "-", title: "achat en ligne", date:"25 Dec 9:34", amount: 300, status: "success"},
        { type: "+", title:"a: Ahmed", date: "25 Dec 9:36", amount: 270, status: "success"},
        { type:"+", title:"restaurant", date:"25 Dec 9:37", amount: 110, status: "failed"}
    ],cards:[
        {id: 101, balance:9500},
        {id: 102, balance:2500}
    ]},

    {email: "Ahmed@gmail.com", password:"abcd",nom:"Ahmed",balance: 15000.00, RIB: "AA2353", transactions:[
        { type: "-", title: "achat en ligne", date:"25 Dec 9:34", amount: 300, status: "success"},
        { type: "+", title:"shopping", date: "25 Dec 9:36", amount: 270, status: "success"},
        { type:"+", title:"disneyLand", date:"25 Dec 9:37", amount: 110, status: "failed"}
    ],cards:[
        {id: 103, balance:10000},
        {id: 104, balance:5000},
        {id: 105, balance:0}
    ]},

    {email: "siham@gmail.com", password:"ab12",nom:"Siham",balance: 24000.00, RIB: "AD1332", transactions:[
        { type: "-", title: "achat en ligne", date:"25 Dec 9:34", amount: 300, status: "success"},
        { type: "+", title:"a: ali", date: "25 Dec 9:36", amount: 270, status: "success"},
        { type:"+", title:"restaurant", date:"25 Dec 9:37", amount: 110, status: "failed"}
    ],cards:[
        {id: 106, balance:18000},
        {id: 107, balance:2000},
        {id: 108, balance:4000}
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
