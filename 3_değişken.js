// Değişken Oluşturma

alert("veri tipleri çalışması!")

var a=10;
var b=25;
var c=40;

console.log(a,b,c);

//Veri Tipleri 

//Primity Veri Tipleri (sadece tanımlandığı değeri taşır)

var d=12; //number veri tipi
console.log(d);
console.log(typeof d);

var e=3.14;
console.log(e);
console.log(typeof e);

var Name="hamza"; //string veri tipi
console.log(Name);
console.log(typeof Name);

var f=true; //Boolean veri tipi
console.log(typeof f);

var g=null; //içine girilen değerin henüz belirlenmemiş olduğunu belirtir(nope gibi) boş bir değer gibi algılanır.
console.log(typeof g); //object yazacak aslında bu bir bug

var h;
console.log(h); //undefined yani hiç tanımlanmamış bile anlamına gelir null ile farkı bu

//Reference Veri Tipleri ()

var numbers=[1,2,3,4,5]; //array veri tipleri(dizi)
console.log(numbers);
console.log(typeof numbers); //yine object olarak çıkar reference veri tiplerinin hepsi object'tir
console.log(numbers[0]); //numbers referansı üzerinden içindeki değerlere erişiriz.

var person={ // bu şekilde kendi objelerimizi tanımlayabiliriz
    Name:"hamza aydın",
    age:21,
};

console.log(person);
console.log(typeof person);

var date=new Date(); // bu şekilde değişkeni bir objeye de bağlayabiliriz
console.log(date);
console.log(typeof date);

var merhaba=function(){ //bu şekilde fonksiyon tanımlayabiliriz
    console.log("merhaba");
};
console.log(merhaba);
console.log(typeof merhaba);

var v=10;

var x=v;

console.log(v,x,);

v=20;
console.log(v,x); //primity oldukları için olduğu yerin değerini tutarlar.


var ç=[1,2,3,4];

var t =ç;

ç.push(5);
console.log(t) // burada t'de değişti çünkü burada t direkt ç'ye değil onun gösterdiği referansa eşit oluyor
