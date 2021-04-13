const Discord = require('discord.js');

module.exports = {
    name: 'whoping',
    description: 'quien chota pingueó',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#1500FF').setTitle(`Quien Chota Pingueó`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/827363440879206450/ping.jpg').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
        msg.channel.send(embed);
    }
};
