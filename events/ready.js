const client = require('../main')
const chalk = require('chalk')
const { ActivityType } = require('discord.js');

client.on("ready", () => {

    const options = [
        {
            type: ActivityType.Playing,
            text: "with chimps",
            status: "invisible"
        }
    ]

    const option = Math.floor(Math.random() * options.length);
   client.user.setPresence({activities:[
        {
            name: options[option].text,
            type: options[option].type,
        },
    ],
     status: options[option].status,
    })

    console.log(chalk.green(`[API] Launched ${client.user.tag}!`))
	console.log(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
});