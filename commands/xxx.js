const Discord = require('discord.js');

module.exports = {
    name: 'xxx',
    description: 'que buscas pajin',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0000').setTitle('Que buscas pajin').setImage('https://www.trecebits.com/wp-content/uploads/2015/08/tumblr_mmefxxPMO61qioyygo1_500.gif').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
        msg.channel.send(embed);
    }
};
