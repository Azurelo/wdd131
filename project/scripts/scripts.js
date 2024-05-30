document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // Retrieve existing subscribers from local storage
        let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];

        // Add the new subscriber to the list
        subscribers.push({ name: name, email: email });

        // Store the updated list back in local storage
        localStorage.setItem('subscribers', JSON.stringify(subscribers));

        // Provide feedback to the user
        alert(`Thank you for subscribing, ${name}!`);

        // Optionally, reset the form
        document.getElementById('newsletter-form').reset();
    } else {
        alert('Please fill in both fields.');
    }
});
