  
const Discord = require('discord.js');

module.exports = {
    name: 'boda',
    description: 'boda',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setImage('https://cdn.discordapp.com/attachments/726437915197964338/804416882387976252/cague.gif').setTimestamp();
        msg.channel.send(embed);
    }
};
