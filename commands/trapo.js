const Discord = require('discord.js');

module.exports = {
    name: 'trapo',
    description: 'Porcentaje aleatorio de Trapito...',
    execute(msg, args) {
        let number = Math.round(Math.random() * 101);
        if (number == 101) {
            number = 325636519;
        }
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle(`Trapo`).addField(msg.author.username, `${number}%`, true);
        msg.channel.send(embed);
    }
};
