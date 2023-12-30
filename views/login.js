// JavaScript code for login using Axios
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const userData = Object.fromEntries(formData);

    try {
        const response = await axios.post('http://localhost:8000/api/v1/users/login', userData);
        console.log(response.data);
        alert('User logged successfully!');
        Swal.fire({
            title: "Success!",
            text: `${response.data.message}`,
            icon: "success"
          });
        window.location.href('/products')
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${response.data.message}`,
          });
    }
});
