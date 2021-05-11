const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping del bot y la api, tiempo online',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82')
        embed.setTitle('Bot 1#')
        .addField(`🏓**Ping Bot:**`, `${Date.now() - msg.createdTimestamp}ms`, true)
        .addField(`🌐**Ping API:**`, `${Math.round(client.ws.ping)}ms`, true)
        msg.channel.send(embed);
    }
};
