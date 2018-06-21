# OTP Sender 

## Documentation

I've used Twilio API to sent sms. Please see it's documentation.

Please make an account of Twilio and replace sid, token and number with your credentials
in sendsms.php for your usage.

Tech Used: HTML/CSS/JS, Bootstrap, Jquery, PHP, MySQL.  

Working:  

Working is pretty straightforward, contacts are stored in contacts.json,
we fetch them and display them in list(links). Clicking on links will open
the contact details page where you can send SMS. Sendsms.php sends message and
entries it in MySQL database. The Records page(messagelist.php) fetches the entries
from database and displays in a table.  