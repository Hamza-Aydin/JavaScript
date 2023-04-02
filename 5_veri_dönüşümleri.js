// Verileri String'e Çevirme(string())

let a;

a=10;
a=String(10); // bu şekilde string metoduyla her veri tipini string'e çevirebiliriz
a=String(3.14);
a=String([4,5,6,1,80]);
a=String(function(){console.log("merhaba")});
a=String(true);

a=(10).toString(); //bu da yukarıdakilerin aynısı sadece farklı kullanım şekli

console.log(a);
console.log(typeof a);

// Verileri Sayı'ya Çevirme(number())

let b;
b=Number("1234");//string şeklindeki sadece sayılar ifadeleri döünüştürebiliriz
b=Number(null);// 0 değerini tutar
b=Number(false);// 0 değerini tutar
b=Number(true);// 1 değerini tutar
b=Number(undefined);
b=Number("hello");// bunların hepsinde NaN hatası verir olmaz yani
b=Number([1,2,3,4,8,9]);
b=Number(function(){ console.log("merhaba")});

b=parseFloat("3.14"); // bunlar da direkt içindeki değeri sayıya çeviriyor ama ona uygun olması lazım 
b=parseInt("3");


console.log(b);
console.log(typeof b);

// Js'deki Otomatik Dönüşümler

const k="hello"+34;//js bunu otomatik olarak string'e çevirip birleştirir
console.log(k);
console.log(typeof k);

const l="22"+54;// yine ikisini de string olarak algılar ve birleştirir
console.log(l);
console.log(typeof l);

const m=Number("66")+84; // ancak bu şekilde kullanırsak normal toplama yapar ve sayı algılar
console.log(m);
console.log(typeof m);

const f=25+"merhaba";// her halukarda js diretk string olarak okur
console.log(f);
console.log(typeof f);

const x=22+44; //burada direkt 66 ve number olarak okur çünkü ikisi de number
console.log(x);
console.log(typeof x);
