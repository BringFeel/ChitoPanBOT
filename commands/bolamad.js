const Discord = require('discord.js');

module.exports = {
    name: 'bolamad',
    description: 'madolam',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#00FF17').setTitle(`M  A  D  O  L  A  M`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/824836743005732864/Screenshot_20210325-234508_Discord.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};