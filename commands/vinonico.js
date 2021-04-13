
const Discord = require('discord.js');

module.exports = {
    name: 'vinonico',
    description: 'son pollos pibes',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle(`Vino Nico`).setImage('https://cdn.discordapp.com/attachments/806436279877238804/819354753221918730/img2.rtve.jpg').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
        msg.channel.send(embed);
    }
};
