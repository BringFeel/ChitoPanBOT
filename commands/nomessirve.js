const Discord = require('discord.js');

module.exports = {
    name: 'nomessirve',
    description: 'nomessirve pibe'',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#6AFFCD').setImage('https://cdn.discordapp.com/attachments/795478872597594164/818214534539640862/No_Messirve.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
