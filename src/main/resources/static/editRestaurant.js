var currentRestaurantId; // Declare a variable to store the current restaurant ID
function editRestaurant(id) {
  console.log("editRestaurant() called with id:", id);
  currentRestaurantId = id; // Store the current restaurant ID in the variable
  fetch(`/backoffice/restaurants/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Edit restaurant data:", data);
      document.getElementById("editName").value = data.name;
      document.getElementById("editStreetAddress").value =
        data.address.street_address;
      document.getElementById("editCity").value = data.address.city;
      document.getElementById("editPostalCode").value =
        data.address.postal_code;
      document.getElementById("editEmail").value = data.email;
      document.getElementById("editPhone").value = data.phone;
      document.getElementById("editPriceRange").value = data.price_range;
      // Display the "Edit Restaurant" form
      document.querySelector(".EditformContainer").style.display = "block";
      document.getElementById("editRestaurantForm").style.display = "block";
    })
    .catch((error) => console.error("Error:", error));
}
function submitEdition(event) {
  console.log("submitEdition() called"); // Log when the function is called
  // Prevent the form from being submitted normally
  event.preventDefault();

  // Get the form data

  var name = document.getElementById("editName").value;
  var streetAddress = document.getElementById("editStreetAddress").value;
  var city = document.getElementById("editCity").value;
  var postalCode = document.getElementById("editPostalCode").value;
  var email = document.getElementById("editEmail").value;
  var phone = document.getElementById("editPhone").value;
  var priceRange = document.getElementById("editPriceRange").value;

  // Create an object with the form data
  var data = {
    name: name,
    address: {
      street_address: streetAddress,
      city: city,
      postal_code: postalCode,
    },
    email: email,
    phone: phone,
    price_range: priceRange,
  };

  console.log("Data being sent to server:", data); // Log the data being sent to the server
  // Send a PUT request with the form data
  fetch(`/backoffice/restaurants/${currentRestaurantId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("Response status:", response.status); // Log the response status
      if (response.status === 200 && response.ok) {
        return response.text().then((text) => {
          return text ? JSON.parse(text) : {};
        });
      }
      throw new Error("Server response was not ok");
    })

    .then((data) => {
      bootbox.alert('Success: Restaurant updated');
      $(".EditformContainer").hide();
      $("#editRestaurantForm").hide();

      // Reload the page
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
