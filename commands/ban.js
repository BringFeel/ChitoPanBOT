
const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban al que se hace el piola',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setTitle(`Que hacés pibe`).setTimestamp();
        msg.channel.send(embed);
    }
};
