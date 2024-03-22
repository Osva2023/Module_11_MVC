function deleteRestaurant(restaurantId) {
    // Display a confirmation dialog
    bootbox.confirm('Are you sure you want to delete this restaurant?', function(result) {
        if (result) {
            // If the user clicked OK, send a DELETE request to the server
            fetch(`/backoffice/restaurants/${restaurantId}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    bootbox.alert('Success: Restaurant deleted');
                    // Reload the page
                    location.reload();
                } else {
                    console.error('Error:', data.status);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    });
}