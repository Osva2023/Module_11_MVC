var currentRestaurantId; // Declare a variable to store the current restaurant ID
function editRestaurant(id) {
  console.log("editRestaurant() called with id:", id);
  currentRestaurantId = id; // Store the current restaurant ID in the variable
  fetch(`/backoffice/restaurants/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Edit restaurant data:", data);
      document.getElementById("editName").value = data.name;
      
      document.getElementById("editEmail").value = data.email;
      document.getElementById("editPhone").value = data.phone;
      document.getElementById("editPriceRange").value = data.price_range;
      // Display the "Edit Restaurant" form
      document.querySelector(".EditformContainer").style.display = "block";
      document.getElementById("editRestaurantForm").style.display = "block";
    })
    .catch((error) => console.error("Error:", error));
}
async function submitEdition(event) {
  console.log("submitEdition() called"); // Log when the function is called
  // Prevent the form from being submitted normally
  event.preventDefault();

  // Get the form data
  var name = document.getElementById("editName").value;
  var email = document.getElementById("editEmail").value;
  var phone = document.getElementById("editPhone").value;
  var priceRange = document.getElementById("editPriceRange").value;

  // Create an object with the form data
  var data = {
    name: name,
    email: email,
    phone: phone,
    price_range: priceRange,
  };

  console.log("Data being sent to server:", data); // Log the data being sent to the server

  try {
    // Send a PATCH request with the form data
    const response = await fetch(`/backoffice/restaurants/${currentRestaurantId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("Response status:", response.status); // Log the response status

    if (!response.ok) {
      throw new Error("Server response was not ok");
    }

    console.log("Response is ok");

    bootbox.alert({
      message: 'Success: Restaurant updated',
      callback: function () {
        console.log("OK button clicked");
        $(".EditformContainer").hide();
        $("#editRestaurantForm").hide();
    
        // Reload the page
        location.reload();
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}