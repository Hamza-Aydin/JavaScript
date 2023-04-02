// Temel Aritmatik Operatörler

let value=10;
let value1=2;

console.log(value+value1);

let çıkarma=value-value1;
console.log(çıkarma);

console.log(value*value1);
console.log(value/value1);
console.log(value%value1);// bölümünden kalan



//Math Objesi

let a;

a=Math.PI;
a=Math.E;

a=Math.ceil(8.6);//direkt yukarıya yuvarlıyor
a=Math.round(3.5);//en yakın olduğu kesime yuvarlıyor
a=Math.floor(18.9);//diretk aşağı tam sayıya yuvarlıyor
a=Math.sqrt(36);//karekök alma metodu
a=Math.abs(-65);//mutlak değerini alır
a=Math.pow(3,4);//üstünü alma metodu
a=Math.max(100,-9,50,7);//içine girilen değerlerden en büyüğünü verir
a=Math.min(-10,4,88,7);//içine girilen değerlerden en küçüğünü verir

a=Math.random();//0 ile 1 arasında ondalıklı random sayılar tutar
a=Math.random()*25+1;//1(dikkat) ile 25 arasında ondalıklı değerler tutar
a=Math.round(Math.random()*100);//tam sayı olarak random değer dönmesini sağladık

console.log(a);
