console.warn("obje oluşturma");

let value;

const programmer={
    name:"hamza",
    age:"22",
    langs:["html","css","python","js"],
    e_mail:"hamza_qwe@gmail.com",

    adress:{
        city:"istanbul",
        street:"güvenç",
    },

    work:function(){
        console.log("programcı çalışıyor...");
    }

}
value=programmer;

value=programmer.e_mail;
value=programmer["e_mail"];//bunu kullanmayacağız

value=programmer.langs;

value=programmer.adress.city;//obje içinden obje özelliklerine erişmek

value=programmer.work();

const eleman=[ //bu şekilde array lerin içine obje tanımlayabiliriz
    {name:"hamza",bölüm:"bilişim"},
    {name:"oğuz",bölüm:"siber"},
];

value=eleman[1].bölüm;//erişimi de bu şekilde olur


console.log(value);