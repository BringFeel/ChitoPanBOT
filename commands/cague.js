const Discord = require('discord.js');

module.exports = {
    name: 'cague',
    description: 'cague',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setImage('https://media.discordapp.net/attachments/773725692989800488/801184914388418630/image0.gif').setTimestamp();
        msg.channel.send(embed);
    }
};
