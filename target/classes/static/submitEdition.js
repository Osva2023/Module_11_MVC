
function submitEdition(event) {
    console.log('submitEdition() called');  // Log when the function is called
    // Prevent the form from being submitted normally
    event.preventDefault();
  
    // Get the form data
    
    var name = document.getElementById('editName').value;
    var streetAddress = document.getElementById('editStreetAddress').value;
    var city = document.getElementById('editCity').value;
    var postalCode = document.getElementById('editPostalCode').value;
    var email = document.getElementById('editEmail').value;
    var phone = document.getElementById('editPhone').value;
    var priceRange = document.getElementById('editPriceRange').value;
  
    // Create an object with the form data
    var data = {
      id: id,
      name: name,
      address: {
        street_address: streetAddress,
        city: city,
        postal_code: postalCode
      },
      email: email,
      phone: phone,
      price_range: priceRange
    };
    
    console.log('Data being sent to server:', data);  // Log the data being sent to the server
    // Send a PUT request with the form data
    fetch(`/backoffice/restaurants/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }