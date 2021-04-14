const Discord = require('discord.js');

module.exports = {
    name: 'bolam',
    description: 'Upa',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Mmmm jorge te pasaste de curioso')
        .setColor('#26FF82')
        embed.setFooter('ChitoPanBOT#4390');
        embed.setTimestamp();
        msg.channel.send(embed);
    }
};
