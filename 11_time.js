let value;

const now=new Date();// şu anki tarihi verir

const date1=new Date("04/30/2001 18:20:00"); // kendi istediğimiz tarihi vermemizi sağlar
const date2=new Date("April 30 2001");//bu şekilde de olur

value=now;
value=date1;
value=date2;

value=date1.getMonth();//kaçıncı ay olduğunu gösterir indeks mantığıyla

value=date1.getDate();//ayın kaçıncı günü olduğunu gösterir bunun mantığı normal

value=date1.getDay();// haftanın kaçıncı günü olduğunu gösterir pazar 1'den başlar

value=date1.getHours();//saati almamızı sağlar

value=date1.getMinutes();//dakikasını almamızı sağlar

value=date1.getSeconds();//saniyeyi almamızı sağlar


date1.setDate(20);//ayın gününü değiştirmemizi sağlar
date1.setMonth(7);//ayımızı değiştirmemizi sağlar
date1.setFullYear(2003);//yılımızı değiştiririz
date1.setHours(4);
date1.setMinutes(40);

value=date1;

console.log(value);