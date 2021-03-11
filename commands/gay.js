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
        embed.setColor('#F99621').setTitle(`${number}% gay`);
        msg.channel.send(embed);
    }
};
