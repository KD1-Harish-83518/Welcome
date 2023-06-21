document.getElementById('detailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var firstname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('lname').value;
    var detailsDiv = document.getElementById("details");
  
    let myObj = {
      name: firstname,
      email: email,
      number: number
    };
  
    let myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem('myObj', myObj_serialized);
  
    var details = "Name: " + firstname + " Email: " + email + " Phone Number: " + number;
  
    // Create the delete button element
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      // Remove the item from local storage
      localStorage.removeItem('myObj');
      // Clear the detailsDiv
      detailsDiv.innerHTML = "";
    });
  
    // Create the edit button element
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      editDetails(myObj);
    });
  
    // Append the delete and edit buttons to the detailsDiv
    detailsDiv.innerHTML = "";
    detailsDiv.appendChild(deleteButton);
    detailsDiv.appendChild(editButton);
    detailsDiv.insertAdjacentHTML("beforeend", details);
  });
  
  function editDetails(details) {
    var firstname = details.name;
    var email = details.email;
    var number = details.number;
  
    // Implement the logic to handle editing the details
    // For example, you can populate a form with the stored details for editing
    // You can also redirect the user to an edit page or display an editable modal
    document.getElementById('name').value = firstname;
    document.getElementById('email').value = email;
    document.getElementById('lname').value = number;
  }
  