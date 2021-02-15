const Discord = require('discord.js');

module.exports = {
    name: 'cs',
    description: 'Info Del Server de CS1.6',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').addField("Server de CS1.6","Steam y No Steam").addField("IP:", "45.235.98.234:27050", true).setFooter("FranBOT#4390").setTimestamp();
        msg.channel.send(embed);
    }
};
