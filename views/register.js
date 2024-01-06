// JavaScript code for registration using Axios
const signupForm = document.getElementById('signupForm');

function validateForm() {
    // Check if either of the radio buttons is selected
    const userTypeUser = document.getElementById('userTypeUser');
    const userTypeAdmin = document.getElementById('userTypeAdmin');

    if (!userTypeUser.checked && !userTypeAdmin.checked) {
        // Show an alert if neither radio button is selected
        return false; // Prevent form submission
    }

    return true; // Allow form submission if one is selected
}

signupForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get form input values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Validate if fields are not empty
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }
    if(!validateForm()){
        alert('Please select a user type (USER or ADMIN)');
        return
    }

    // Create user data object
    const userData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };
    try {
        response = await axios.post('http://localhost:8000/api/v1/users/register', userData);
        console.log(response)
        Swal.fire({
            title: "Success!",
            text: `${response.data.message}`,
            icon: "success"
        });
        window.location.href = '/login'
    } catch (error) {
        Swal.fire({
            title: "ERROR!",
            text: `${error.response.data.error}`,
            icon: "error"
        });
    }
});
