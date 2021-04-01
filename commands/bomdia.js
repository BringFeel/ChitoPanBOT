const Discord = require('discord.js');

module.exports = {
    name: 'bomdia',
    description: 'Bom día caralho',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#00FF17').setTitle(`Bom Día Caralho`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/824828488833171476/bom_dia.jpeg').setTimestamp();
        msg.channel.send(embed);
    }
};