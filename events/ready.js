const client = require('../main')
const chalk = require('chalk')

client.on("ready", () => {
    console.log(chalk.green(`[API] Launched ${client.user.tag}!`))
	console.log(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
});