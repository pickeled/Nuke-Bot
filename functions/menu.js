const chalk = require(`chalk`);
const { SelectMenuBuilder, ActionRowBuilder } = require("discord.js")
const client = require('../main').client

const create_mh = (array) => {

    if(!array) throw new Error(chalk.red.bold("The options were not provided! Make sure you provide all of the options!"))
    if(array.length < 0) throw new Error(chalk.red.bold("The array has to have atleast one thing to select!"))
    let select_menu

    let id = `help-menus`
    let menus = []

    const emojiMod = "<:hydroxmod:908668383464157185>"
    const emojiMusic = "<a:music:908668497498869792>" 
    const emojiUtil = " <:utility:915934937574682624>"
    const emojiInfo = "<:blurplerules:859068786996019210>"
    const emojiDev = "<a:hydroccx_owner:908665721372966912>"
    const emojiFun = "<:gamer:909748502144376832>"
    const emojiEconomy = "<a:coin:909367690236395520>"
    const emojiSuggest = "<:Betatesters:940727531475181599>"

    const emo = {
        Information: `${emojiInfo}`,
        Moderation: `${emojiMod}`,
        Developer: `${emojiDev}`,
        Fun: `${emojiFun}`,
        Suggestions: `${emojiSuggest}`,

    }

    array.forEach(cca => {
        let name = cca
        let sName = `${name.toUpperCase()}`
        let tName = name.toLowerCase()
        let fName = name.toUpperCase()

        return menus.push({
            label: sName,
            description: `${tName} commands!`,
            value: fName
        })
    })

    let chicken = new SelectMenuBuilder()
        .setCustomId(id)
        .setPlaceholder(`Choose the command category`)
        .addOptions(menus)

    select_menu = new ActionRowBuilder()
    .addComponents(
        chicken
    )
    return {
        smenu: [select_menu],
        sid: id
    }
}

module.exports = create_mh