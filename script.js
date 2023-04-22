// Wait for the page to load before adding event listeners
window.addEventListener("load", function() {
    // Get the login form element
    const loginForm = document.querySelector("form");
  
    // Add an event listener for form submission
    loginForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the input values
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Perform some basic validation
      if (!username || !password) {
        alert("Please enter both a username and password.");
        return;
      }
  
      // TODO: Send the login request to the server and handle the response
      console.log("Submitting login form...");
    });

    const loginBtn = document.querySelector('.login-btn');

    loginBtn.addEventListener('click', () => {
    alert('Log in clicked!');
    });

  });

  