// JavaScript code for registration using Axios
const signupForm = document.getElementById('signupForm');

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

    // Create user data object
    const userData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };
    try {
        response = await axios.post('http://localhost:8000/api/v1/users/register', userData);
        console.log(response)
        if(response.status === 201)
        { 
            Swal.fire({
            title: "Success!",
            text: `${response.data.message}`,
            icon: "success"
          });
        }
    } catch (error) {
        Swal.fire({
            title: "ERROR!",
            text: `${error.response.data.error}`,
            icon: "error"
            });
    }
});
