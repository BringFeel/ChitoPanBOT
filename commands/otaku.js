const Discord = require('discord.js');

module.exports = {
    name: 'otaku',
    description: 'Porcentaje aleatorio de Otaku',
    execute(msg, args) {
        let number = Math.round(Math.random() * 101);
        if (number == 101) {
            number = 256;
        }
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FC5857').setTitle(`${number}% otaku`);
        msg.channel.send(embed);
    }
};
