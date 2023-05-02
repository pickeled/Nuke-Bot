const chalk = require('chalk')

module.exports = {
  name: "deleteroles",
  description: "Delete all roles",
  run: async (client, message, args) => {
    const allowed = ['1080222349804191835', '902002172689018900']
    if (!allowed.includes(message.author.id)) return 

    try {
      let deletedRolesCount = 0;
      message.guild.roles.cache.each(role => {
        if (role.editable && role.name !== "@everyone") {
          role.delete().then(() => {
            deletedRolesCount++;
            console.log(`Deleted: ${chalk.red(role.name)}`)
            console.log(`Deleted a total of ${chalk.yellow(deletedRolesCount)} roles in ${chalk.yellow(message.guild.name)}`)
            if (deletedRolesCount === message.guild.roles.cache.size - 1) {
              if (message.channel.type === 'text' && message.channel.viewable) {
                message.channel.messages.fetch(message.id).then(msg => {
                  if (msg.deletable) msg.delete();
                }).catch(err => console.log(chalk.red(`Could not delete message: ${err.message}`)));
              }
            }
          }).catch(err => console.log(chalk.red(`Could not delete role: ${role.name}`)));
        }
      });
    } catch (err) {
      console.log(chalk.red(err))
    }
  }
}
