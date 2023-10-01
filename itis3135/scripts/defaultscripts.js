
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
