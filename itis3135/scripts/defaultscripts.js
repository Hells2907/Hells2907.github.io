
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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('introForm');
    const addCourseButton = document.getElementById('addCourse');
    const resultsContainer = document.getElementById('resultsContainer');

    // Prevent form submission without necessary information
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Implement form validation logic here
        const name = document.getElementById('name').value;
        const mascot = document.getElementById('mascot').value;
        const image = document.getElementById('image').value;
        const imageCaption = document.getElementById('imageCaption').value;
        const personalBackground = document.getElementById('personalBackground').value;
        const professionalBackground = document.getElementById('professionalBackground').value;
        const academicBackground = document.getElementById('academicBackground').value;
        const backgroundinWebDevelopment = document.getElementById('backgroundinWebDevelopment').value;
        const primaryComputerPlatform = document.getElementById('primaryComputerPlatform').value;

        // Check if any of the required fields are empty
        if (
            name === '' ||
            mascot === '' ||
            image === '' ||
            imageCaption === '' ||
            personalBackground === '' ||
            professionalBackground === '' ||
            academicBackground === '' ||
            backgroundinWebDevelopment === '' ||
            primaryComputerPlatform === ''
        ) {
            alert('Please fill out all required fields.');
        } else {
            // Gather data from the form and display it
            const courses = document.querySelectorAll('input[name="course"]');
            const courseValues = [];
            courses.forEach((course) => {
                if (course.value !== '') {
                    courseValues.push(course.value);
                }
            });

            const funnyThing = document.getElementById('funnyThing').value;
            const anythingElse = document.getElementById('anythingElse').value;
            const agreement = document.getElementById('agreement').checked;

            // Create a summary of the user's input
            const summary = `
                <h2>Introduction Page</h2>
                <p>Name: ${name}</p>
                <p>Mascot: ${mascot}</p>
                <p>Image Caption: ${imageCaption}</p>
                <p>Personal Background: ${personalBackground}</p>
                <p>Professional Background: ${professionalBackground}</p>
                <p>Academic Background: ${academicBackground}</p>
                <p>Background in Web Development: ${backgroundinWebDevelopment}</p>
                <p>Primary Computer Platform: ${primaryComputerPlatform}</p>
                <p>Courses currently taking: ${courseValues.join(', ')}</p>
                <p>Funny Thing: ${funnyThing}</p>
                <p>Anything else? ${anythingElse}</p>
                <p>Agreed to terms: ${agreement ? 'Yes' : 'No'}</p>
            `;

            // Display the summary
            resultsContainer.innerHTML = summary;
        }
    });

    // Reset the form when the Reset button is clicked
    const resetButton = document.querySelector('input[type="reset"]');
    resetButton.addEventListener('click', function () {
        form.reset();
        resultsContainer.innerHTML = ''; // Clear the results container
    });

    // Add new course text boxes
    addCourseButton.addEventListener('click', function () {
        const coursesDiv = document.getElementById('courses');
        const newCourseInput = document.createElement('input');
        newCourseInput.type = 'text';
        newCourseInput.name = 'course';
        coursesDiv.appendChild(newCourseInput);

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            coursesDiv.removeChild(newCourseInput);
            coursesDiv.removeChild(deleteButton);
        });
        coursesDiv.appendChild(deleteButton);
    });
});
