const Discord = require('discord.js');

module.exports = {
    name: 'cague',
    description: 'cague',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setImage('https://cdn.discordapp.com/attachments/726437915197964338/804412367168471090/y2mate.com_-_deigamer_cague_xD_360p.mp4').setTimestamp();
        msg.channel.send(embed);
    }
};
