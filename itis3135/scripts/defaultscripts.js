
        // JavaScript to display time and date
        function updateTimeAndDate() {
            const now = new Date();
            const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
            const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()];
            const date = now.getDate();
            const year = now.getFullYear();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            const timeAndDate = `Today is ${hours}:${minutes < 10 ? '0' : ''}${minutes} on ${dayOfWeek}, ${date} ${month}, ${year}`;
            document.getElementById('timeAndDate').textContent = timeAndDate;
        }
        updateTimeAndDate();

        
function submitInfo() {
    const name = document.getElementById('name').value;
    const mood = document.getElementById('mood').value;
    const welcomeMessage = `The Acharya Insights welcomes you, ${name}! We're glad you are doing ${mood}!`;
    document.getElementById('welcomeMessage').textContent = welcomeMessage;
    
    
}

// JavaScript to find polygon name and change background color to blue
function findPolygon() {
    const favNumber = Math.abs(Math.round(parseFloat(document.getElementById('favNumber').value)));
    const polygonNames = [
        'Monogon (Henagon)',
        'Digon (Bigon)',
        'Triangle',
        'Quadrilateral',
        'Pentagon',
        'Hexagon',
        'Heptagon',
        'Octagon',
        'Nonagon',
        'Decagon',
    ];

    if (favNumber >= 0 && favNumber <= 10) {
        const polygonName = polygonNames[favNumber-1];
        alert(`The polygon with ${favNumber} sides is called a ${polygonName}.`);
        
        
    } else {
        alert('Please enter a number between 0 and 10.');
    }
}
function alligatorSing() {
    const randomNumber = Math.floor(Math.random() * 100);
    alert(`🎶 Alligator is singing: 'The square of ${randomNumber} is ${randomNumber * randomNumber}.' 🎶`);
}

// Function to make the alligator dance and do math
function alligatorDance() {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    alert(`💃🐊 Alligator is dancing and adding numbers: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
}
// Function to make the alligator tell a joke
function alligatorJoke() {
    alert("😄 Alligator says: 'Why don't alligators like fast food? Because they can't catch it!' 😄");
}

// Function to make the alligator swim
function alligatorSwim() {
    alert("🏊‍♂️🐊 Alligator is taking a dip in the swamp! 🏊‍♂️🐊");
}


document.addEventListener("DOMContentLoaded", function() {
    // Function to prevent form submission without necessary information
    document.getElementById("introForm").addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    // Function to reset the form
    document.querySelector("input[type='reset']").addEventListener("click", function() {
        document.getElementById("results").style.display = "none";
    });

    // Function to add new course text boxes
    document.getElementById("addCourse").addEventListener("click", function() {
        const coursesContainer = document.getElementById("coursesContainer");
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.classList.add("courseInput");
        courseInput.name = "coursesTaking[]";
        courseInput.required = true;
        
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.classList.add("deleteCourse");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            coursesContainer.removeChild(courseInput);
            coursesContainer.removeChild(deleteButton);
        });

        coursesContainer.appendChild(courseInput);
        coursesContainer.appendChild(deleteButton);
    });

    // Function to gather data and display results
    document.getElementById("introForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const results = document.getElementById("results");

        // Create HTML content for the results
        let html = "<h3>Your Introduction Page:</h3>";
        html += "<ul>";
        for (const [key, value] of formData.entries()) {
            html += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        html += "</ul>";

        results.innerHTML = html;
        results.style.display = "block";
    });
});

// Function to validate the form
function validateForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const image = document.getElementById("image").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webDevelopmentBackground = document.getElementById("webDevelopmentBackground").value;
    const computerPlatform = document.getElementById("computerPlatform").value;
    const agreement = document.getElementById("agreement").checked;
    
    // Check if any of the required fields are empty
    if (
        name.trim() === "" ||
        mascot.trim() === "" ||
        image.trim() === "" ||
        imageCaption.trim() === "" ||
        personalBackground.trim() === "" ||
        professionalBackground.trim() === "" ||
        academicBackground.trim() === "" ||
        webDevelopmentBackground.trim() === "" ||
        computerPlatform.trim() === "" ||
        !agreement
    ) {
        alert("Please fill out all required fields and agree to the terms.");
        return false;
    }

    // You can add additional custom validation rules here if needed.

    return true;
}


