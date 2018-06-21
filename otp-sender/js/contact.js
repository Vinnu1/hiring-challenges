document.addEventListener("DOMContentLoaded",function(){

const contact_name = document.querySelector("#contact_name");
const contact_number = document.querySelector("#contact_number");
const smsBtn = document.querySelector("#sms"); 
const sendBtn = document.querySelector("#send"); 
const msg = document.querySelector("#msg");
const otp = document.querySelector("#otp");

let url_string = window.location.href;
let url = new URL(url_string);
let first_name = url.searchParams.get("first"); 
let last_name = url.searchParams.get("last");
let name = first_name  + " " + last_name;
let number = parseInt(url.searchParams.get("number"));


//some validations to see if a user is correct or not
if(number && first_name && last_name){
    if(number.toString().length !== 10 || isNaN(number)){
     window.location.href = 'index.html'   
    }
}
else{
    window.location.href = 'index.html'
}

contact_name.innerHTML = name;
contact_number.innerHTML = number;

let flag = 1;
let OTP = 0;

smsBtn.addEventListener('click',function(){
    $('#msgArea').toggle(0500);
    if(flag == 1){
        OTP = Math.floor(100000 + Math.random()*900000);
        otp.innerHTML = "Hi, Your OTP is: " + OTP;
        flag = 0;
    }
    else{
        flag = 1;
        msg.value = "";
    }
});

sendBtn.addEventListener('click',function(){
    $.ajax({type: "POST", url: "sendsms.php", data: {otp: OTP, msg:msg.value, number: number, name: name},  success: function(result){
        alert(result);
    }});
    msg.value = "";
    $('#msgArea').toggle(0500);
});

});