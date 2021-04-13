const Discord = require('discord.js');
os = require('os');

module.exports = {
    name: 'discords',
    description: 'Discords en los que está chitopanbot',
    execute(msg, args) {
      const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle(`Actualmente estoy en`)
        .addField(`${client.guilds.cache.size}`, `servidores`, true)
        embed.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png')
      msg.channel.send(embed);
    }
};
