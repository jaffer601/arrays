// Array -Array is a variable,we can store more than one value.it may be String,number,objects,functions & other arrays.

// we can declare a array in two ways 

// 1.var arrayname=[element];
// 2.var aryname=[elements0,element1.....elementn];

 var a = ["jaffer sadiq", 29, "MBA", 2017];
document.write(a+"<br><br>");
// console.log(a);

// //we want print particular value 
console.log(a[1]);
document.write(a[1] +"<br><br>");

//check length of arrray..here "length"keyword predefine 
console.log(a.length);

// //adding new array 1.push() array--add element at the end of the   2.unshift() array add element at end of the array.

a.unshift(1)
console.log(a);
a.push("sk university");
console.log(a);
document.write(a + "<br> <br>");


// //deleting array 1.shift() array 2.POP() array

 a.shift();
 console.log(a);
 document.write(a + "<br> <br>");

a.pop();
console.log(a);
document.write(a + "<br> <br>");


// //if we want delete or  add particular element we can use slice() function  splice() function

var sadiq=[0,1,2,3,4,5];
document.write(sadiq+ "<br> <br>");
console.log(sadiq);
var jaffer = sadiq.slice(1,2);
document.write(jaffer)
console.log(jaffer)

// a.splice(0,-1,"sadiq","jaffer" ,"patan");
// document.write(a+"<br><br>");
// console.log(a);

// //merging two or more arrays--we can use concat() function

 var color1=["red","green","blue"];
var color2=["white ","orange"]
 var c=color1.concat(color2);
 console.log(c);
 document.write(c +"<br><br>");

 var s=[1,2,3,4];
var j=[5,6,7];
 var p=[8,9,10];
 var z=s.concat(j,p);
 document.write(z+"<br><br>");

 //by using join() function we can add differnt 
 var d=z.join(" &");
 document.write(d +"<br><br>");





