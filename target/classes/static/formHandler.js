function submitForm() {
    const name = document.getElementById('name').value;
    const priceRange = document.getElementById('priceRange').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const streetAddress = document.getElementById('streetAddress').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postalCode').value;
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;

    const data = {
        name,
        priceRange,
        phone,
        email,
        address: {
            streetAddress,
            city,
            postalCode
        },
        user: {
            name: userName,
            email: userEmail,
            password
        }
    };

    fetch('/backoffice/restaurants', {
        method: 'POST',
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