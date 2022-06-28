function add(){
let bat = document.getElementById('bat-qt').value;
let ball = document.getElementById('ball-qt').value;
let stump = document.getElementById('stump-qt').value;


let batunit=document.getElementById('bat-unit').innerText;
// console.log(batunit);
let result=bat*batunit;
console.log(result);
 document.getElementById('bat-prize').innerHTML=result;

 let ballunit = document.getElementById('ball-unit').innerText;
//  console.log(ballunit);
 let result1=ball*ballunit;
 document.getElementById('ball-prize').innerHTML=result1;

 let stumpunit = document.getElementById('stump-unit').innerText;
//  console.log(ballunit);
 let result2=stump*stumpunit;
 document.getElementById('stump-prize').innerHTML=result2;
    let result4 = result + result1 + result2;
    document.getElementById('total').innerHTML=result4;
    let result5=(18/100)*result4;
   
    document.getElementById('tax').innerHTML=result5;

    let result6=result4 + result5;
   
    document.getElementById('grand').innerHTML=result6;

}