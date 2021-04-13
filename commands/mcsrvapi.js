const Discord = require('discord.js');

module.exports = {
    name: 'mcsrvapi',
    description: 'APIs usadas',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#2636FF').addField("APIs usadas:", "https://mcapi.us/" + "\nhttps://api.mcsrvstat.us/", true).setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
        msg.channel.send(embed);
    }
};