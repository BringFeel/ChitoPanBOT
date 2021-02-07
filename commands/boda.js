const Discord = require('discord.js');

module.exports = {
    name: 'boda',
    description: 'boda de Fran y Light',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setTitle("Boda de Fran y Light").setImage('https://cdn.discordapp.com/attachments/776612505093931098/807687273503260722/2021-02-06_15.59.31.png').setTimestamp();
        msg.channel.send(embed);
    }
};
