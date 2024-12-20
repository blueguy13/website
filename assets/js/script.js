document.addEventListener('DOMContentLoaded', () => {
    // List of plugins (hardcoded for now)
    const plugins = [
        { 
            name: "Crasher", 
            file: "crasher.jar", 
            description: "Made for Paper Java 21 (1.21.3). Commands: /crasher, /crash"
        },
        { 
            name: "Commands", 
            file: "Commands.jar", 
            description: "This Plugin Is In Beta!!! for cmds do /help commands for Java 17 Paper 1.21.3"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
                { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
        },
        { 
            name: "Coming Soon", 
            file: "coming-soon.jar", 
            description: "Stay tuned for this plugin!"
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

            // Set the inner HTML of the card with plugin details (no image now)
            card.innerHTML = `
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
