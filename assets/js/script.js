document.addEventListener('DOMContentLoaded', () => {
    // List of plugins (hardcoded in this case or you could fetch from an API)
    const plugins = [
        { 
            name: "Plugin 1", 
            file: "plugin1.jar", 
            description: "This is a great plugin that adds features to your server.", 
            image: "https://via.placeholder.com/250x150?text=Plugin+1" 
        },
        { 
            name: "Plugin 2", 
            file: "plugin2.jar", 
            description: "A plugin that enhances server management and performance.", 
            image: "https://via.placeholder.com/250x150?text=Plugin+2" 
        },
    ];

    // Function to populate plugin cards
    function populatePluginCards() {
        const pluginCardsContainer = document.querySelector('.plugin-cards');
        const pluginDropdown = document.getElementById('plugin-dropdown');

        plugins.forEach(plugin => {
            // Create card element
            const card = document.createElement('div');
            card.classList.add('plugin-card');

            // Add image, name, description, and button
            card.innerHTML = `
                <img src="${plugin.image}" alt="${plugin.name}">
                <h3>${plugin.name}</h3>
                <p>${plugin.description}</p>
                <button class="download-btn" onclick="downloadPlugin('${plugin.file}')">Download</button>
            `;

            // Append the card to the container
            pluginCardsContainer.appendChild(card);

            // Add option to the dropdown
            const option = document.createElement('option');
            option.value = plugin.file;
            option.textContent = plugin.name;
            pluginDropdown.appendChild(option);
        });
    }

    // Function to handle downloading the selected plugin
    window.downloadPlugin = function(fileName) {
        const downloadUrl = `/plugins/${fileName}`;
        window.location.href = downloadUrl;
    }

    // Populate the cards and dropdown on page load
    populatePluginCards();
});
