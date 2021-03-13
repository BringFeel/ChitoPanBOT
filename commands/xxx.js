const Discord = require('discord.js');

module.exports = {
    name: 'xxx',
    description: 'que buscas pajin',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0000').setTitle(`Que buscas pajín`).setImage('https://www.trecebits.com/wp-content/uploads/2015/08/tumblr_mmefxxPMO61qioyygo1_500.gif').setTimestamp();
        msg.channel.send(embed);
    }
};
