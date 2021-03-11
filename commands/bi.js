const Discord = require('discord.js');

module.exports = {
    name: 'bi',
    description: 'Porcentaje aleatorio de Bisexual',
    execute(msg, args) {
        let number = Math.round(Math.random() * 101);
        if (number == 101) {
            number = 325619;
        }
        msg.channel.send(`${msg.author.toString()}`);
        const embed = new Discord.MessageEmbed();
        embed.setColor('#9C4E97').setTitle(`Bisexual`)
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setDescription(`${number}%`);
        msg.channel.send(embed);
    }
};
