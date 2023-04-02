console.warn("string'de yeni standart");

const Name="Hamza";
const departmant="Yazılım";
const salary="20k";

const a="İsim:"+Name+"\n"+"Bölüm:"+departmant+"\n"+"Maaş:"+salary;

console.log(a);

const b=`İsim:${Name}\nBölüm:${departmant}\nMaaş${salary}`;//altgr ve noktalı virgüle 2 kere bas
//Yukarıdaki olayın aynısı sadece daha kısa kullanımı ES6+ ile gelen özellik
console.log(b);

const html=
    "<ul>"+
    "<li>"+Name+"</li>"+
    "<li>"+departmant+"</li>"+
    "<li>"+salary+"</li>"+
    "</ul>"
;
document.body.innerHTML=html;//bu şekilde direkt sayfamızın body kısmına yazmış oluyoruz

const n=10/4;
function m(){return"merhaba"};

const hmtl1=//böyle yaparak daha kolay bir yazım elde edilir
//her türlü js kodu sayfamıza dahil edilebilir
`
    <ul>
        <li>${Name}</li>
        <li>${departmant}</li>
        <li>${salary}</li>
        <li>${n}</li>
        <li>${m()}</li>

    </ul>`;

document.body.innerHTML=hmtl1;    
