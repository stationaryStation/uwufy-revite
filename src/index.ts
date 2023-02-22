() => {
    // Write your code here.
    const client: import('revolt.js').Client = (window as any).controllers.client.getReadyClient();
    console.log('Received Client:', client.user.username);
    client.on("message", async (m) => {
        const can_uwufy = m.content.match(/(?:l|r)(?:L|R)n([aeiou])N([aeiou])oveOVE/g);
        if (can_uwufy && m.author._id === client.user._id) {
            const owofied_content = m.content
                .replace(/(?:l|r)/g, 'w')
                .replace(/(?:L|R)/g, 'W')
                .replace(/n([aeiou])/g, 'ny$1')
                .replace(/N([aeiou])/g, 'Ny$1')
                .replace(/N([AEIOU])/g, 'NY$1')
                .replace(/ove/g, 'uv')
                .replace(/OVE/g, 'UV');
            m.edit({ content: owofied_content });
        }
    })
    return ({
        onUnload: () => {
            // This runs when the plugin is disabled or unloaded.
            console.log('Plugin unloaded');
        }
    });
};