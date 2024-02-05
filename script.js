const users = [
  { Email: 'ok@gmail.com', password: 'Sunbeam' },
  // Add more users here...
];

// Function to validate user credentials
function authenticateUser(Email, password) {
  return users.find(user => user.Email === Email && user.password === password);
}

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
 
  // Get input values
  const Email = document.getElementById('Email').value;
  const password = document.getElementById('password').value;

  // Authenticate user
  const authenticatedUser = authenticateUser(Email, password);

  if (authenticatedUser) {
    alert(`Welcome, ${Email}! Login successful.`);
    // Redirect to another page or perform further actions upon successful login
        window.location.href="Q1.html";
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
