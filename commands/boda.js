const Discord = require('discord.js');

module.exports = {
    name: 'boda',
    description: 'boda',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.").addField("Este es un título de campo, puede contener 256 caracteres","Este es un valor de campo, puede contener 2048 caracteres.").addField("Campo en línea", "Debajo del campo en línea", true).setFooter("FranBOT#4390").setImage('https://cdn.discordapp.com/attachments/776612505093931098/809159523871752192/2021-02-10_17.29.58.png').setTimestamp();
        msg.channel.send(embed);
    }
};
