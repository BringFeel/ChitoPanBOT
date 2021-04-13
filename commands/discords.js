const Discord = require('discord.js');
os = require('os');

module.exports = {
    name: 'discords',
    description: 'Discords en los que está chitopanbot',
    execute(msg, args) {
      const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setTitle(`Discords en total`)
        .addField(`:map: Estoy en`, `${client.guilds.cache.size}`, true)
        embed.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png')
      msg.channel.send(embed);
    }
};
