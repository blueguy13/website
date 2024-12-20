document.addEventListener('DOMContentLoaded', () => {
    // List of plugins (hardcoded for now)
    const plugins = [
        { 
            name: "Crasher", 
            file: "crasher.jar", 
            description: "Made for Paper Java 21 (1.21.3). Commands: /crasher, /crash", 
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!", 
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!", 
        }
    ];

    // Function to populate plugin cards
    function populatePluginCards() {
        const pluginCardsContainer = document.querySelector('.plugin-cards');
        
        plugins.forEach(plugin => {
            // Create a plugin card
            const card = document.createElement('div');
            card.classList.add('plugin-card');
            
            // Add content to the card
            card.innerHTML = `
                <img src="${plugin.image}" alt="${plugin.name}">
                <h3>${plugin.name}</h3>
                <p>${plugin.description}</p>
                <a href="/plugins/${plugin.file}" class="download-btn" download>Download</a>
            `;

            // Add the card to the container
            pluginCardsContainer.appendChild(card);
        });
    }

    // Run the function to populate the plugin cards
    populatePluginCards();
});
