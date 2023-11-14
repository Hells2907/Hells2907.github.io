// Get all the section elements
const sections = document.querySelectorAll("section");

// Initially show the home page (section with ID "what")
document.getElementById("what").style.display = "block";

// Add event listeners to the menu items
document.getElementById("menu-home").addEventListener("click", () => showSection("what"));
document.getElementById("menu-about").addEventListener("click", () => showSection("who"));
document.getElementById("menu-best-times").addEventListener("click", () => showSection("when"));
document.getElementById("menu-locations").addEventListener("click", () => showSection("where"));
document.getElementById("menu-how-to").addEventListener("click", () => showSection("how"));
document.getElementById("menu-why").addEventListener("click", () => showSection("why"));
document.getElementById("menu-my-dishes").addEventListener("click", () => showSection("my-dishes"));

// Function to hide all sections and show the selected one
function showSection(sectionId) {
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}
