document.getElementById('detailsForm').addEventListener('submit', function(){
    var firstname = document.getElementById('name').value;
    var lastname = document.getElementById('lname').value;
    let myObj = {
        name: `${firstname}`,
        lname: `${lastname}`

    }
    
let myObj_serialized = JSON.stringify(myObj);


localStorage.setItem('myObj',myObj_serialized);

})