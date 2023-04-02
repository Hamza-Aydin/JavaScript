console.warn("string metodları");

let value;

const firstname="Nail";
const lastname="Armstrong";
const diller="css,html,js";

value=firstname+lastname;//yan yana birleşimleri yazılır

value=firstname+" "+lastname;//boşluk bırakmış oluruz aralarında

value=value+"=astronot"; //value+="astronot"; daha kolay olur

value=firstname.length;//stringlerin uzunluklarını belirtir

value=firstname.concat(" ",lastname," ","deneme yazısı");//string'in peşine ekleme yapmamızı sağlar

value=firstname.toLowerCase();//bütün harfleri küçültür
value=lastname.toUpperCase();// bütün harfleri büyültür

value=firstname[0];//indeks mantığıyla eleman tutmasını sağlar
value=firstname[firstname.length-1];//son elemanı bulmamızı sağlar

value=firstname.indexOf("i");//bu değerin kaçıncı indekste olduğunu belirtir
value=firstname.indexOf("z");//bu olmadığı için -1 döner

value=firstname.charAt(2);//direkt o indeksi tutmasını sağlar

value=diller.split(",");//virgüle göre parçalamış oluyor

value=diller.replace("css","python");//stringleri değiştimemizi sağlıyor

value=diller.includes("html");//string'in içinde bu şekilde bir eğer var mı onu kontrol etmemize yarıyor
value=diller.includes("badbsdc");


console.log(value);