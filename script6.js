// Function to edit user details
function editUser(userId, userName) {
    const editForm = document.getElementById('editForm');
    const editUserIdInput = document.getElementById('editUserId');
    const editNameInput = document.getElementById('editName');

    editUserIdInput.value = userId;
    editNameInput.value = userName;

    editForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const updatedUserName = editNameInput.value;

        fetch('/api/users/' + userId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: updatedUserName })
        })
        .then(response => {
            if (response.ok) {
                // Update the user detail on the website
                const userElement = document.getElementById('user-' + userId);
                const userDetails = userElement.querySelector('.user-details');
                userDetails.textContent = updatedUserName;

                // Reset the edit form
                editUserIdInput.value = '';
                editNameInput.value = '';
            } else {
                console.error('Failed to edit user detail');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

// Function to delete a user detail
function deleteUser(userId) {
    fetch('/api/users/' + userId, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            // Remove the user detail from the website
            const userElement = document.getElementById('user-' + userId);
            userElement.remove();
        } else {
            console.error('Failed to delete user detail');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to display user details on the website
function displayUserDetails(user) {
    const userList = document.getElementById('userList');
    const userElement = document.createElement('div');
    userElement.setAttribute('id', 'user-' + user._id);
    userElement.classList.add('user');

    const userDetails = document.createElement('div');
    userDetails.classList.add('user-details');
    userDetails.textContent = user.name;

    const editIcon = document.createElement('span');
    editIcon.classList.add('edit-icon');
    editIcon.textContent = '✏️';
    editIcon.addEventListener('click', () => {
        editUser(user._id, user.name);
    });

    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('delete-icon');
    deleteIcon.textContent = '❌';
    deleteIcon.addEventListener('click', () => {
        deleteUser(user._id);
    });

    userElement.appendChild(userDetails);
    userElement.appendChild(editIcon);
    userElement.appendChild(deleteIcon);
    userList.appendChild(userElement);
}

// Function to get all user details
function getUserDetails() {
    fetch('/api/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            displayUserDetails(user);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Load user details when the page is loaded
document.addEventListener('DOMContentLoaded', getUserDetails);
