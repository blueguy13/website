document.addEventListener('DOMContentLoaded', () => {
    // List of plugins (hardcoded for now)
    const plugins = [
        { 
            name: "Plugin 1", 
            file: "plugin1.jar", 
            description: "Enhance your Minecraft server with awesome features!", 
            image: "https://via.placeholder.com/280x150?text=Plugin+1" 
        },
        { 
            name: "Plugin 2", 
            file: "plugin2.jar", 
            description: "Manage your server more efficiently with this plugin.", 
            image: "https://via.placeholder.com/280x150?text=Plugin+2" 
        },
        { 
            name: "Plugin 3", 
            file: "plugin3.jar", 
            description: "Improve server performance and add new commands.", 
            image: "https://via.placeholder.com/280x150?text=Plugin+3" 
        }
    ];

    // Function to populate plugin cards
    function populatePluginCards() {
        const pluginCardsContainer = document.querySelector('.plugin-cards');
        const pluginDropdown = document.getElementById('plugin-dropdown');

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

            // Add the plugin to the dropdown
            const option = document.createElement('option');
            option.value = plugin.file;
            option.textContent = plugin.name;
            pluginDropdown.appendChild(option);
        });
    }

    // Function to handle the download button (uses the file selected from the dropdown)
    function downloadPlugin() {
        const pluginFile = document.getElementById('plugin-dropdown').value;
        if (pluginFile) {
            window.location.href = `/plugins/${pluginFile}`;
        }
    }

    // Run the function to populate the plugin cards
    populatePluginCards();

    // Bind the download function to the button
    window.downloadPlugin = downloadPlugin;
});
