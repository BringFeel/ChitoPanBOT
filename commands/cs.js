const Discord = require('discord.js');

module.exports = {
    name: 'cs',
    description: 'Info Del Server de CS1.6',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setThumbnail('http://alienhost.es/images/cs1-6.png').addField("Server de CS1.6","Steam y No Steam").addField("IP:", "45.235.99.242:29815", true).setImage('https://cdn.discordapp.com/attachments/703772175949234230/811693873394745394/Counter-Strike_Logo.png').setFooter("ChitoPanBOT#4390").setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
        msg.channel.send(embed);
    }
};
