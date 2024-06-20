        fetch('http://localhost:3300/')
        .then((response)=>{response.json()})
        .then((data)=>{ console.log(data); })
        .catch((error)=>{ console.log(error);})

        // API endpoint for creating a new user
const apiUrl = 'http://localhost:3300/post/api';

// Form data to be sent in the request body
const formData = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'securepassword123',
};

// Make a POST request using the Fetch API
 const button = document.querySelector('button')
 button.addEventListener('click' , ()=>{
    fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(newUserData => {
          // Process the newly created user data
          console.log('New User Data:', newUserData);
        })
        .catch(error => {
          console.error('Error:', error);
        });
 })
