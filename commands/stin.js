const Discord = require('discord.js');

module.exports = {
    name: 'stin',
    description: '.___.',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Quiero una puta')
        .setColor('#2636FF')
        embed.setFooter('ChitoPanBOT#4390');
        embed.setTimestamp();
        msg.author.send(embed);
    if(msg.author.bot) return;
    msg.channel.send(`${msg.author.toString()} Fijate tu md para ver los comandos!`)
    }
};