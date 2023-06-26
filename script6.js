document.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to retrieve user details from crudcrud.com
    axios.get('https://crudcrud.com/api/your-api-endpoint')
      .then(function (response) {
        var user = response.data;
        // Display the retrieved user details on the website
        document.getElementById('name').value = user.firstname;
        document.getElementById('lname').value = user.lastname;
      })
      .catch(function (error) {
        console.log('Error retrieving user details:', error);
      });
  });
  