//1.Arithmatic operator
// addition +
// subs -
// multi *
// exponantiation **
// division /
// modulus %
// inceament ++
// decreament --
let a=7;
let b=2;
console.log("a+b=", a+b)
console.log("a-b=", a-b)
console.log("a/b=", a/b)
console.log("a*b=", a*b)
console.log("a**b=", a**b)
console.log("a%b=", a%b)
console.log("a++=", a++)
console.log("a=", a)

//2.assignment operator
c=4           
c+=5    
console.log(c)
// = x=y
// += x=x+y
// -= 
// *= x=x*y
// /=
// **= x=x**y

//3.comparision operator
let comp1=6;
let comp2=8;
console.log("comp1=comp2 is",comp1==comp2)
console.log("comp1=comp2 is",comp1!=comp2)
console.log("comp1=comp2 is",comp1===comp2)  //value and type bothe are equal to
console.log("comp1=comp2 is",comp1!==comp2)
console.log("comp1>comp2 is",comp1>comp2)

//4.logical operator
let x=5;
let y=6;
console.log(x<y && x==5)

let age=15;  //prompt doesnot work here
if(age>10 && age<20){
    console.log("your age lies b/w 10 & 20")
}
else{
    console.log("your age doesnot lies b/w 10 & 20")
}

//loop
let obj ={
    hh: 90,
    fff:67,
    hghj:78,
    shiv:56,
}
for(let i in obj){
    console.log("marks of " +i+ "are " + obj[i])
}
//function
function avg(a,b){
    return (a+b)/2
}
average=avg(4,7)
console.log(average)

//loops
let num=[2,5,6,8,5]
for(let i=0;i<num.length;i++){
    console.log(num[i])
}
//array.from
let name="anand"
let arr=Array.from(name)
console.log(arr)