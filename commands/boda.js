const Discord = require('discord.js');

module.exports = {
    name: 'boda',
    description: 'boda',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setTitle("Boda de Fran y Light").setAuthor(bot.user.username, bot.user.avatarURL).setFooter("Pedido por", msg.author.username, msg.author.avatarURL).setImage('https://cdn.discordapp.com/attachments/776612505093931098/809159523871752192/2021-02-10_17.29.58.png').setTimestamp();
        msg.channel.send(embed);
    }
};
