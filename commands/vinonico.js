
const Discord = require('discord.js');

module.exports = {
    name: 'vinonico',
    description: 'son pollos pibes',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setTitle(`Vino Nico`).setImage('https://cdn.discordapp.com/attachments/806436279877238804/819354753221918730/img2.rtve.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
