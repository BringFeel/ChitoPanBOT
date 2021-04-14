const Discord = require('discord.js');

module.exports = {
    name: 'stin',
    description: '.___.',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Quiero una puta')
        .setColor('#26FF82')
        embed.setFooter('ChitoPanBOT#4390');
        embed.setTimestamp();
        msg.channel.send(embed);
    }
};
