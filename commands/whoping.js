const Discord = require('discord.js');

module.exports = {
    name: 'whoping',
    description: 'quien chota pingueó',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#1500FF').setTitle(`Quien Chota Pingueó`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/827363440879206450/ping.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
