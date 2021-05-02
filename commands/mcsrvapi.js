const Discord = require('discord.js');

module.exports = {
    name: 'mcsrvapi',
    description: 'APIs usadas',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').addField("APIs usadas:", "https://mcapi.us/" + "\nhttps://api.mcsrvstat.us/", true).setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
