const Discord = require('discord.js');

module.exports = {
    name: 'santi',
    description: 'foa',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle('ä')
        .setColor('#26FF82')
        embed.setFooter('ChitoPanBOT#4390');
        embed.setTimestamp();
        msg.channel.send(embed);
    }
};
