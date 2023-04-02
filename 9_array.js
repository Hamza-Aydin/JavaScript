console.warn("array özellikleri ve metodları");

let value;

const a=[1,4,8,44,55,68];

const b=new Array(89,44,11,66);//bu çok fazla kullanılmıyor

const langs=["python","js",null,undefined,46];

value=a.length;//dizinin uzunluğunu verir

value=langs[3];//stringlerdeki aynı olay

value=langs[langs.length-1];//son elamana ulaşmamızı sağlar

langs[3]="güncelleme";//var olan indeksleri güncellememizi sağlar

langs.push(602);//dizinin sonuna değer eklememizi sağlar

langs.unshift("html");//dizinin başına değer eklememizi sağlar

langs.pop();//array'in sonundan değer atmamızı sağlar

langs.shift();//array'in başından değer atmamamızı sağlar

langs.splice(2,3);//belli indeks aralığını atmamızı sağlar

langs.reverse();//array'i ters çevirir

value=langs;

a.sort();// sadece bu yeterli olmaz ilk rakamlara göre sıralar

value=a;

value=a.sort(function(x,y){
    return x-y
});//bu şekilde küçükten büyüğe sıralanmış olur

value=a.sort(function(x,y){
    return y-x
});//böyle de büyükten küçüğe sıralamış oluruz


console.log(value);