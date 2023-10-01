
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

        // JavaScript to greet the user
        // JavaScript to greet the user and change background color to yellow
function submitInfo() {
    const name = document.getElementById('name').value;
    const mood = document.getElementById('mood').value;
    const welcomeMessage = `The Acharya Insights welcomes you, ${name}! We're glad you are doing ${mood}!`;
    document.getElementById('welcomeMessage').textContent = welcomeMessage;
    
    // Change background color to yellow
    document.getElementById('main').style.backgroundColor = 'yellow';
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
        
        // Change background color to blue
        document.getElementById('main').style.backgroundColor = 'blue';
    } else {
        alert('Please enter a number between 0 and 10.');
    }
}
