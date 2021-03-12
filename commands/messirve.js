const Discord = require('discord.js');

module.exports = {
    name: 'messirve',
    description: 'messirve pa´',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#00FFA9').setTitle(`Messirve`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/818214522594525234/Messirve.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
