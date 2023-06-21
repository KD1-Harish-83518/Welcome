document.getElementById('detailsForm').addEventListener('submit', function(){
var firstname = document.getElementById('name').value;
var lastname = document.getElementById('lname').value;

localStorage.setItem('name',firstname);
localStorage.setItem('lname',lastname);
})