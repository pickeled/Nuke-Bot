const client = require('../main')
const chalk = require('chalk')

client.on("ready", () => {
    console.log(chalk.green(`[API] Successfully launched ${client.user.tag}! 🚀`))
	const activities = [
		{ name: `logging`, type: 0 }, // PLAYING

	];
	const status = [
		'idle'
	];
	let i = 0;
	setInterval(() => {
		if(i >= activities.length) i = 0
		client.user.setActivity(activities[i])
		i++;
	}, 5000);

	let s = 0;
	setInterval(() => {
		if(s >= activities.length) s = 0
		client.user.setStatus(status[s])
		s++;
	}, 30000);

});