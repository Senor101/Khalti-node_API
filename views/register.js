// JavaScript code for registration using Axios
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const userData = Object.fromEntries(formData);
    let response;

    try {
        response = await axios.post('http://localhost:8000/api/v1/users/register', userData);
        console.log(response);
        Swal.fire({
            title: "Success!",
            text: `${response.data.message}`,
            icon: "success"
          });
        window.location.href('/login')
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${response.data.message}`,
          });
        alert(error)
    }
});
