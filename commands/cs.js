const Discord = require('discord.js');

module.exports = {
    name: 'cs',
    description: 'Info Del Server de CS1.6',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setThumbnail('http://alienhost.es/images/cs1-6.png').addField("Server de CS1.6","Steam y No Steam").addField("IP:", "( Servidor inactivo )", true).setImage('https://cdn.discordapp.com/attachments/703772175949234230/811693873394745394/Counter-Strike_Logo.png').setFooter("FranBOT#4390").setTimestamp();
        msg.channel.send(embed);
    }
};
