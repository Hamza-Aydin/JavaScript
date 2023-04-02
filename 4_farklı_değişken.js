//var ile değişken oluşturma

var isim="hamza aydın";
console.log(isim);

var isim="Hamza Aydın";//bu şekilde aynı değişken tekrar var ile tanımlanabilir

isim="HAMZA";
console.log(isim);

var a,b;
a=20;
b=10;
console.log(a+b);

//let ile değişken oluşturma

/*let c="mehmet"; Burada let 2 kere aynı değişkeni tanımlamaya izin vermiyor
let c="aslı";
console.log(c);*/

let c,d,h;
c=15;
d=6;
h=78;
console.log(c+d*h);

//const ile değişken oluşturma

/*const ve="okul"; const ile oluşturduğumuz değişken direkt sabit olarak geçer değiştirilmez
ve="üni";
console.log(ve);*/

/*const l; aynı şekilde burada da direkt değişkenin değerini ilk oluşturduğumuz satırda vermemiz lazım yoksa hata verir
l=10;
console.log(l);*/

const k=[1,2,3,4];
// const k=[1,2,3,4,5,6] bu şekilde yaparsak hata veriri çünkü direkt k'yı tekrar atamış oluruz
console.log(k);

k.push(5);//ama bu şekilde verirsek sadece k'ya değer eklemiş oluyoruz k tekrar tanımlanmıyor

console.log(k);





