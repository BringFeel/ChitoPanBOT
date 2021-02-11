const Discord = require('discord.js');

module.exports = {
    name: 'boda',
    description: 'boda',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').addField("Boda de Fran y Light","La boda se va a hacer el 14/02/2021").addField("Server:", "CobelMotion", true).setFooter("FranBOT#4390").setImage('https://cdn.discordapp.com/attachments/776612505093931098/809159523871752192/2021-02-10_17.29.58.png').setTimestamp();
        msg.channel.send(embed);
    }
};
