function submitForm() {
  const name = document.getElementById("name").value;
  const priceRange = document.getElementById("priceRange").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const streetAddress = document.getElementById("streetAddress").value;
  const city = document.getElementById("city").value;
  const postalCode = document.getElementById("postalCode").value;
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const password = document.getElementById("password").value;

  const data = {
    name,
    priceRange,
    phone,
    email,
    address: {
      streetAddress,
      city,
      postalCode,
    },
    user: {
      name: userName,
      email: userEmail,
      password,
    },
  };

  fetch("/backoffice/restaurants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    // Check if the response is JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
        // If it's JSON, parse it
        return response.json();
    } else {
        // If it's not JSON, throw an error
        throw new Error('Invalid JSON');
    }
})
.then(data => {
    bootbox.alert('Success: Restaurant created');
    $(".formContainer").hide();
    $("#createRestaurantForm").hide();
    location.reload();
})
.catch((error) => {
    console.error("Error:", error);
});
}
