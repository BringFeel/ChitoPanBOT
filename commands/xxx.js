const Discord = require('discord.js');

module.exports = {
    name: 'xxx',
    description: 'que buscas pajin',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle('Que buscas pajin').setImage('https://www.trecebits.com/wp-content/uploads/2015/08/tumblr_mmefxxPMO61qioyygo1_500.gif').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
