const Discord = require('discord.js');

module.exports = {
    name: 'gay',
    description: 'Porcentaje aleatorio de Gay',
    execute(msg, args) {
        let number = Math.round(Math.random() * 101);
        if (number == 101) {
            number = 325619;
        }
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle(`Gay`).addField(msg.author.username, `${number}%`, true);
        msg.channel.send(embed);
    }
};
