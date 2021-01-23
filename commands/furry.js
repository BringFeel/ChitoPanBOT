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
        embed.setColor('#7289da').setTitle(`${number}% furry`);
        msg.channel.send(embed);
    }
};