function submitForm() {
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h4>Entered Information:</h4>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    // Here, you can add further processing, such as sending the data to a server for authentication
    // Reset the form (optional)
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
