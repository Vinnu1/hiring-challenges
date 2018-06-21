document.addEventListener("DOMContentLoaded",function(){
    console.log("Index started");

    const contactList = document.querySelector("#contactList");

    $.get("contacts.json",function(data,status){
        //document.write("Data:"+"<br>"+(data[0].first_name));
        //document.writeln("Status:"+status);
    
        data.forEach(contactData => {
            let contact = document.createElement('a');
            contact.href = "contact.html?first="+contactData.first_name+"&last="+contactData.last_name+"&number="+contactData.number;
            contact.classList.add('list-group-item','list-group-action','onhover-active','active');
            contact.innerHTML = contactData.first_name +" "+ contactData.last_name + "<span class='float-right badge badge-warning badge-pill'>" + contactData.number + "</span>"; 
            contactList.appendChild(contact);
        });
    })
})