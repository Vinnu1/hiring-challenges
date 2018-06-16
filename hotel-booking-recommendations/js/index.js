document.addEventListener("DOMContentLoaded",function(){

    const hotelList = document.querySelector("#hotelList");
    const rec = document.querySelector("#rec");

    $.get("hotels.json",function(data,status){
        data.forEach(hotelData => {
            let hotel = document.createElement('a');
            hotel.href = "hotel.html?name="+ hotelData.name + "&place="+hotelData.place+"&cost="+hotelData.cost_per_day;
            hotel.classList.add('list-group-item','list-group-action','onhover-active','active');
            hotel.innerHTML = hotelData.name +", "+ hotelData.place + "<span class='float-right badge badge-warning badge-pill'>Rs. " +hotelData.cost_per_day + " Per Day</span>"; 
            hotelList.appendChild(hotel);
        });
    })

    $.ajax({type: "POST", url: "recommend.php",  success: function(result){
        rec.innerHTML = result;
        rec.classList.remove('d-none');
    }});
})