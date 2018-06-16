document.addEventListener("DOMContentLoaded",function(){

const hotel_details = document.querySelector("#hotel_details");
const hotel_cost = document.querySelector("#hotel_cost");
const bookNowBtn = document.querySelector("#booknow"); 
const saveBtn = document.querySelector("#save");
const bookBtn = document.querySelector("#book");
const username = document.querySelector("#username");
const no_of_days = document.querySelector("#no_of_days");
const stats = document.querySelector("#stats");

let url_string = window.location.href;
let url = new URL(url_string);
let hotel_name = url.searchParams.get("name"); 
let hotel_place = url.searchParams.get("place");
let name =   hotel_name + ", " + hotel_place;
let cost = parseInt(url.searchParams.get("cost"));

//some validations to see if a user is correct or not
if(hotel_name && hotel_place && cost ){
    if(isNaN(cost)){
     window.location.href = 'index.html'   
    }
}
else{
    window.location.href = 'index.html'
}

//current stats
$.ajax({type: "POST", url: "insert.php", data: {name:name,score:0,type:"default"},  success: function(result){
    stats.innerHTML = stats.innerHTML + result;
    stats.classList.remove('d-none');
}});

//visitor added
$.ajax({type: "POST", url: "insert.php", data: {name:name,score:1,type:"visit"},  success: function(result){
    console.log(result);
}});

hotel_details.innerHTML = name;
hotel_cost.innerHTML = "Rs. " + cost + " Per Day";

let days = 1;
let flag = 1;

bookNowBtn.addEventListener('click',function(){
    $('#bookingArea').toggle(0500);
    if(flag == 0){
        username.value = '';
        no_of_days.value = '';
        flag = 1;
    }
    else{
        flag = 0;
    }
});

//draft work
let draft = localStorage.getItem(name);
if(draft){
    draft = JSON.parse(draft);
    username.value = draft.username;
    no_of_days.value = draft.days;
}

//save button
saveBtn.addEventListener('click',function(){
    if(no_of_days.value != ""){
        days = no_of_days.value;
    }
    localStorage.setItem(name,JSON.stringify({"username":username.value,"days":days}));
    $.ajax({type: "POST", url: "insert.php", data: {name:name,score:2,type:"draft"},  success: function(result){
        console.log(result);
        alert("Draft saved");
    }});
})

//book button
bookBtn.addEventListener('click',function(){
    if(username.value == ""){
        alert("Name is required");
        return;
    }
    $.ajax({type: "POST", url: "insert.php", data: {name:name,score:3,type:"book"},  success: function(result){
        console.log(result);
        alert("Booked!");
    }});
    username.value = "";
    no_of_days.value = "";
    days = 1;
    $('#bookingArea').toggle(0500);
    if(draft){
        localStorage.removeItem(name);
    }
});

});