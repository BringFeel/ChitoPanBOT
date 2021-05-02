const Discord = require('discord.js');

module.exports = {
    name: 'stin',
    description: '.___.',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Con stin no jodas pa')
        .setColor('#26FF82')
        .setImage('https://cdn.discordapp.com/attachments/831975734070476861/835955392525107242/stin.jpg')
        embed.setFooter('ChitoPanBOT#4390');
        embed.setTimestamp();
        msg.channel.send(embed);
    }
};