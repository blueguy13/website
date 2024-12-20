document.addEventListener('DOMContentLoaded', () => {
    // List of plugins (hardcoded for now)
    const plugins = [
        { 
            name: "Crasher", 
            file: "crasher.jar", 
            description: "Plugin Made For Paper 1.21.3. Do /crash or /crasher number to crash your server's RAM. Example: /crasher 500 will crash your server in MB.", 
            image: "https://via.placeholder.com/280x150?text=Plugin+1" 
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!", 
            image: "https://via.placeholder.com/280x150?text=Plugin+2" 
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!", 
            image: "https://via.placeholder.com/280x150?text=Plugin+3" 
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
