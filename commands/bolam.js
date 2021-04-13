const Discord = require('discord.js');

module.exports = {
    name: 'bolam',
    description: 'Paloma',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle(`Bolam la paloma`).setImage('https://cdn.discordapp.com/attachments/808513589223882802/820860165472387112/20210311_232801.jpg').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
        msg.channel.send(embed);
    }
};
