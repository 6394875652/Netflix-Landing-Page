// function mouseDown(){
//     document.getElementById('myP').style.color="blue";
// }
// function mouseUp(){
//     document.getElementById('myP').style.color="red";
//}


//---key press event---
// const keyPress=()=>{
//     document.getElementById('keys').innerHTML=`hello ${event}`;
// }
// const keyDown=()=>{
//     document.getElementById('keys').innerHTML='key is down';
// }
// const keyUp=()=>{
//     document.getElementById('keys').innerHTML='key is up';
// } 

// const selectElm=()=>{
//     const inputChange=document.getElementById('ice').value;
//     const iceCreams=document.getElementById('iceCreams').value;
    

// }

// const Change=()=>{
//     document.querySelector('#result').innerHTML='hello everyone';
//     // document.getElementById('result').innerHTML='welcome';
// }



//---timing based in javascript---
  const myname=document.querySelector('#showmyname');
  const btn=document.querySelector('.btn');
  

  const showmyname=()=>{
    myname.innerHTML='Loading....'
    setTimeout(()=>{
        myname.innerHTML='ANAND YADAV'
    },1000)
  }
  btn.addEventListener('click',showmyname);
