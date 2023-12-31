
function checkIsLoggedIn() {
    const cookies = document.cookie.split(';');
    console.log(cookies);
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'isLoggedIn' && value.trim() === 'true') {
            return true;
        }
    }
    return false;
}

if(!checkIsLoggedIn()){
    window.location.href = '/login'
}



function getParameterByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var productName = getParameterByName("name") || "Dummy";
var productAmount = getParameterByName("price") || 10;
// console.log(productAmount, productName)

document.getElementById("itemName").value = productName;
document.getElementById("amount").value = productAmount;

async function verifyPayment(payload) {
    axios.post("http://localhost:8000/api/v1/payment/verify-payment",payload)
    .then(response => {
        console.log(response)
        Swal.fire({
          title: "Success!",
          text: "Payment Successful!",
          icon: "success"
        });
    })
    .catch(error => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
    })
}

var config = {
    // replace the publicKey with yours
    "publicKey": "test_public_key_77bac81b32ed4e95b995bfbe502a3ab8",
    "productIdentity": "1234567890",
    "productName": `${productName}`,
    "paymentPreference": [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
        ],
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            // console.log(payload);
            verifyPayment(payload);
            // alert("verified")
        },
        onError (error) {
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    }
};


var checkout = new KhaltiCheckout(config);
var btn = document.getElementById("payment-button");
btn.onclick = function (event ) {
    var amountToPay = (parseInt(document.getElementById("amount").value))*100;
    event.preventDefault();
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({amount: amountToPay});
}