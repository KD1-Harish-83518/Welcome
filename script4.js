document.getElementById('detailsForm').addEventListener('submit', function(e){
e.preventDefault();
    var firstname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('lname').value;
    var detailsDiv = document.getElementById("details");
   
    let myObj = {
        name: `${firstname}`,
        email: `${email}`,
        number: `${number}`

    }
    
let myObj_serialized = JSON.stringify(myObj);
localStorage.setItem('myObj',myObj_serialized);

var details = "Name: " + firstname + " Email: " + email + " Phone Number" + number;
detailsDiv.innerHTML = details;




})