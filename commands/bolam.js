const Discord = require('discord.js');

module.exports = {
    name: 'bolam',
    description: 'Paloma',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#00FBFF').setTitle(`Bolam la paloma`).setImage('https://cdn.discordapp.com/attachments/808513589223882802/820860165472387112/20210311_232801.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
