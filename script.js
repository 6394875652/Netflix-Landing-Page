// var username="anand";
// let lastname=34;
// const tttt="kannauj";
// console.log(username);
// console.log(lastname);
// console.log(college);
// console.log(typeof lastname);
// console.log(typeof tttt);
// console.log("name is" + username + "number is" + lastname + "college" + tttt);

// //template literal/template string
// console.log(`
//     my name is ${username}
//     my number is ${lastname}
// `);

// let x,y,z;
// x=4;
// y=5;
// z=x+y;
// console.log(z);

 // 1. print in js
    // console.log("hello word sdf");
    // alert("me");
    // document.write("this is document write");
  
    //2. js console API
    consol.log("hello word");
    console.warn("this is warning");
    console.error("this an error");
  
    //3. data type in js
    //number
    var num1=23;
    var num2=34.4;
  
    //string
    var str1="this is a string";
    var str2="this is a 2string";
  
    //objects
    var marks={
      ravi: 34,
      somu: 54,
      anand: 65,
    }
    consol.log(marks);

    //array
    var arr=[1,2,"dff",3.3,8]
    //consol.log(arr)

    //arithmatic operator
    var a=100;
    var b=10;
    console.log("the value of a+b is ",a+b);
    console.log("the value of a+b is ",a-b);
    console.log("the value of a+b is ",a*b);
    console.log("the value of a+b is ",a/b);

    //assignment operetor
    var c=b;
    c+=2;
    c*=2;
    c/=2
    console.log(c);

    var x=34;
    var y=45;
    console.log(x==y);
    console.log(x>=y);
    console.log(x<=y);

    //logical operator
    // logical and
    console.log(true&&false);
    console.log(true&&true);
    //lofical or
    console.log(true||false);
    //logical not
    // console.log(|false);
    // console.log(|true);

    //fuction
    function avg(a,b){
      return (a+b)/2;
    }
    c1=avg(5,5);
    c2=avg(23,45);
    console.log(c1,c2);