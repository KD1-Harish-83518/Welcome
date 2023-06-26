document.getElementById('detailsForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form input values
    var firstname = document.getElementById('name').value;
    var lastname = document.getElementById('lname').value;
  
    // Create the appointment object
    var appointment = {
      firstname: firstname,
      lastname: lastname
    };
  
    // Make a POST request to store the appointment in the cloud
    axios.post('https://crudcrud.com/api/your-api-endpoint', appointment)
      .then(function (response) {
        console.log('Appointment stored in the cloud:', response.data);
        // Handle the response here
      })
      .catch(function (error) {
        console.log('Error storing appointment in the cloud:', error);
        // Handle the error here
      });
  });
  