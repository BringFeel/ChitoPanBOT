const Discord = require('discord.js');

module.exports = {
    name: 'furry',
    description: 'Porcentaje aleatorio de Furry',
    execute(msg, args) {
        let number = Math.round(Math.random() * 101);
        if (number == 101) {
            number = 512;
        }
        const embed = new Discord.MessageEmbed();
        embed.setColor('#27FF00').setTitle(`${number}% furry`);
        msg.channel.send(embed);
    }
};