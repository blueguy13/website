document.addEventListener('DOMContentLoaded', () => {
    // List of plugins (hardcoded in this case or you could fetch from an API if needed)
    const plugins = [
        { name: "Plugin 1", file: "plugin1.zip" },
        { name: "Plugin 2", file: "plugin2.zip" },
    ];

    // Function to populate plugin list
    function populatePluginList() {
        const pluginList = document.getElementById('plugin-list');
        const pluginDropdown = document.getElementById('plugin-dropdown');

        plugins.forEach(plugin => {
            // Add to list
            const listItem = document.createElement('li');
            listItem.textContent = plugin.name;
            pluginList.appendChild(listItem);

            // Add to dropdown
            const option = document.createElement('option');
            option.value = plugin.file;
            option.textContent = plugin.name;
            pluginDropdown.appendChild(option);
        });
    }

    // Function to handle downloading the selected plugin
    function downloadPlugin() {
        const pluginFile = document.getElementById('plugin-dropdown').value;
        if (pluginFile) {
            const downloadUrl = `/plugins/${pluginFile}`;
            window.location.href = downloadUrl;
        }
    }

    // Populate the list and dropdown on page load
    populatePluginList();

    // Bind the download button
    window.downloadPlugin = downloadPlugin;
});
