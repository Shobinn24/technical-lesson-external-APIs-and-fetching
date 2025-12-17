// Define the function to display astronauts
// Function to display astronauts data
function displayAstronauts(data) {
    const astronautList = document.getElementById("astronaut-list");
// Clear any existing content
    astronautList.innerHTML = '';
    
    // Loop through the array of astronauts and create list items
    data.people.forEach(astronaut => {
        const listItem = document.createElement("li");
        listItem.textContent = astronaut.name;
        astronautList.appendChild(listItem);
    });
}

// funcgtion for error handling
function handleError(error) {
    const astronautList = document.getElementById("astronaut-list");
    astronautList.innerHTML = `<li class="error">Error: ${error.message}</li>`;
    console.error('Error fetching data:', error);
    }

// Fetch data from the external API
fetch("http://api.open-notify.org/astros.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        displayAstronauts(data);
    })
    .catch(error => {
        handleError(error);
    });

