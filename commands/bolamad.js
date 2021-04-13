const Discord = require('discord.js');

module.exports = {
    name: 'bolamad',
    description: 'madolam',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle(`M  A  D  O  L  A  M`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/824836743005732864/Screenshot_20210325-234508_Discord.jpg').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
        msg.channel.send(embed);
    }
};
