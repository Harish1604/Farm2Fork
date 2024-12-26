const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const port = 3000;

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Function to make API call
function callAPI(endpoint, method, body) {
    return fetch(`http://localhost:${port}/${endpoint}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const formData = {
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    console.log(formData);
    callAPI('signup', 'POST', formData).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Signup successful:', data);
        container.classList.remove("active");
    })
    .catch(error => {
        console.error('Error during signup:', error);
    });
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const errorMessage = document.getElementById('errorMessage');
    console.log(errorMessage.style);

    // Get form data
    const formData = {
        username: document.getElementById('in-username').value,
        password: document.getElementById('in-password').value
    };
    callAPI('signin', 'POST', formData).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Signin successful:', data);
        errorMessage.innerHTML="Invalid Username or Password"
        errorMessage.style.display = 'none';
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Error during signup:', error);
        errorMessage.textContent = 'Signin failed. Invalid username or password.';
        errorMessage.style.display = 'block'; // Display the error message
    });
});
