const Discord = require('discord.js');

module.exports = {
    name: 'bolam',
    description: 'paloma',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#00FBFF').setTitle(`Bolam`).setImage('https://cdn.discordapp.com/attachments/808513589223882802/820860165472387112/20210311_23280Bolam').setTimestamp();
        msg.channel.send(embed);
    }
};
