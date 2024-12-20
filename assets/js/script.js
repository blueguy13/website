document.addEventListener('DOMContentLoaded', () => {
    // List of plugins (hardcoded for now)
    const plugins = [
        { 
            name: "Crasher", 
            file: "crasher.jar", 
            description: "Made for Paper Java 21 (1.21.3). Commands: /crasher, /crash",
            image: "https://via.placeholder.com/280x150?text=Crasher"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!",
            image: "https://via.placeholder.com/280x150?text=Coming+Soon"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!",
            image: "https://via.placeholder.com/280x150?text=Coming+Soon"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!",
            image: "https://via.placeholder.com/280x150?text=Coming+Soon"
        },
    ];

    // Function to populate plugin cards
    function populatePluginCards() {
        // Get the container to hold the plugin cards
        const pluginCardsContainer = document.querySelector('.plugin-cards');

        // Check if the container exists
        if (!pluginCardsContainer) {
            console.error('No element with the class ".plugin-cards" found!');
            return;
        }

        // Loop through the plugins array to generate cards
        plugins.forEach(plugin => {
            // Create a plugin card div
            const card = document.createElement('div');
            card.classList.add('plugin-card');

            // Set the inner HTML of the card with plugin details
            card.innerHTML = `
                <img src="${plugin.image}" alt="${plugin.name}">
                <h3>${plugin.name}</h3>
                <p>${plugin.description}</p>
                <a href="/plugins/${plugin.file}" class="download-btn" download>Download</a>
            `;

            // Append the generated card to the plugin cards container
            pluginCardsContainer.appendChild(card);
        });
    }

    // Run the function to populate the plugin cards
    populatePluginCards();
});
