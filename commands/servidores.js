const Discord = require('discord.js');
os = require('os');

module.exports = {
    name: 'servidores',
    description: 'Total de servidores de discord en los que está chitopanbot',
    execute(msg, args) {
      const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82')
        .addField(`**Servidores:**`, `${client.guilds.cache.size}\n**Usuarios:**\n${client.users.cache.size}`, true)
        embed.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg')
      msg.channel.send(embed);
    }
};
