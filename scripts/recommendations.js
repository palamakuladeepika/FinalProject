const recommendations = [
    {
        category: 'Beach',
        places: [
            {
                name: 'Maldives',
                description: 'Experience the serene beaches and crystal clear waters of the Maldives.',
                images: ['images/b1.jpg', 'images/B2.jpg']
            },
            {
                name: 'Bora Bora',
                description: 'Enjoy the picturesque lagoons and overwater bungalows in Bora Bora.',
                images: ['images/ba1.jpg', 'images/ba2.jpg']
            }
        ]
    },
    {
        category: 'Temple',
        places: [
            {
                name: 'Angkor Wat, Cambodia',
                description: 'Explore the magnificent ancient temple complex of Angkor Wat.',
                images: ['images/t1.jpg', 'images/t2.jpg']
            }
        ]
    },
    {
        category: 'Country',
        places: [
            {
                name: 'Italy',
                description: 'Delve into the rich culture, history, and cuisine of Italy.',
                images: ['images/c1.jpg', 'images/c2.jpg']
            },
            {
                name: 'Australia',
                description: 'Experience the diverse landscapes and vibrant cities of Australia.',
                images: ['images/ca1.jpg', 'images/ca2.jpg']
            }
        ]
    }
];

// Function to create a recommendation element
function createRecommendationElement(place) {
    const recommendationDiv = document.createElement('div');
    recommendationDiv.className = 'recommendation';

    const h3 = document.createElement('h3');
    h3.textContent = place.name;

    const p = document.createElement('p');
    p.textContent = place.description;

    place.images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Image of ${place.name}`;
        recommendationDiv.appendChild(img);
    });

    recommendationDiv.appendChild(h3);
    recommendationDiv.appendChild(p);

    return recommendationDiv;
}

// Inject recommendations into the DOM
const recommendationsContainer = document.getElementById('recommendations-container');
recommendations.forEach(category => {
    const categoryHeader = document.createElement('h2');
    categoryHeader.textContent = category.category;
    recommendationsContainer.appendChild(categoryHeader);

    category.places.forEach(place => {
        const recommendationElement = createRecommendationElement(place);
        recommendationsContainer.appendChild(recommendationElement);
    });
});
