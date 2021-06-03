const Discord = require('discord.js');

module.exports = {
    name: 'mcsrvapi',
    description: 'APIs usadas',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').addField("APIs usadas:", "https://mcapi.us/" + "\nhttps://api.mcsrvstat.us/", true).setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
