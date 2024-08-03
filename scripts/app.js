document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('preferences-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const continent = document.getElementById('continent').value;
        const activity = document.getElementById('activity').value;
        const recommendations = await getRecommendations(continent, activity);
        displayRecommendations(recommendations);
    });
});

async function getRecommendations(continent, activity) {
    // Fetch recommendations from a JSON file or API
    const response = await fetch('data/destinations.json');
    const destinations = await response.json();
    return destinations.filter(destination => 
        destination.continent === continent && destination.activities.includes(activity));
}

function displayRecommendations(recommendations) {
    const recommendationsSection = document.getElementById('recommendations');
    recommendationsSection.innerHTML = '';
    recommendations.forEach(destination => {
        const div = document.createElement('div');
        div.className = 'recommendation';
        div.innerHTML = `
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <img src="${destination.image}" alt="${destination.name}">
        `;
        recommendationsSection.appendChild(div);
    });
}
