// form-validation.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservation-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      let isValid = true;
  
      // Validate text input fields
      const textInputs = form.querySelectorAll('input[type="text"]');
      textInputs.forEach(function(input) {
        if (input.value.trim() === '') {
          // Show error message (you can customize this)
          alert('Please fill in all required fields.');
          isValid = false;
        }
      });
  
      // Validate email input fields
      const emailInputs = form.querySelectorAll('input[type="email"]');
      emailInputs.forEach(function(input) {
        const email = input.value.trim();
        if (!validateEmail(email)) {
          // Show error message (you can customize this)
          alert('Please enter a valid email address.');
          isValid = false;
        }
      });
  
      // Validate date input fields
      const dateInputs = form.querySelectorAll('input[type="date"]');
      dateInputs.forEach(function(input) {
        if (input.value.trim() === '') {
          // Show error message (you can customize this)
          alert('Please select a date.');
          isValid = false;
        }
      });
  
      if (isValid) {
        // If form is valid, submit the form
        form.submit();
        console.log('Form submitted successfully!');
      }
    });
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  