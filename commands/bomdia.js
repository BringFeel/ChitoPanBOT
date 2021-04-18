const Discord = require('discord.js');

module.exports = {
    name: 'bomdia',
    description: 'Bom día caralho',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle(`Bom Día Caralho`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/824828488833171476/bom_dia.jpeg').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
