() => {
    // Write your code here.
    const client: import('revolt.js').Client = (window as any).controllers.client.getReadyClient();

    client.on("message", async (m) => {
        // 1. Split message into parts
        let new_message: any = [];
        if (m.author_id === client.user._id) {
            m.content.split(" ").forEach((part: string) => {
                // 2. Check if part can be converted
                if (part.match(/<@([A-z0-9]{26})>/g)) {
                    console.log(1, part)
                    new_message.push(part)
                } else if (part.match(/<\#([A-z0-9]{26})>/g)) {
                    console.log(2, part)
                    new_message.push(part)
                } else if (part.match(/:([0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}):/g)) {
                    console.log(3, part);
                    new_message.push(part)
                } else {
                    // 3. If so, then uwufy it
                    const new_part = part
                        .replace(/(?:l|r)/g, 'w')
                        .replace(/(?:L|R)/g, 'W')
                        .replace(/n([aeiou])/g, 'ny$1')
                        .replace(/N([aeiou])/g, 'Ny$1')
                        .replace(/N([AEIOU])/g, 'NY$1')
                        .replace(/ove/g, 'uv')
                        .replace(/OVE/g, 'UV');
                        console.log("uwufied:", new_part);
                    new_message.push(new_part)
                }
            })

            // 4. join every part together
            const final = new_message.join(" ").toString();

            // 5. edit
            m.edit({ content: final });
        }
        // 6. profit

    })
    return ({
        onUnload: () => {
            // This runs when the plugin is disabled or unloaded.

        }
    });
};