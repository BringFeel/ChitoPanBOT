const Discord = require('discord.js');

module.exports = {
    name: 'support',
    description: 'Support command',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle('Support:')
	    .setURL('https://discord.gg/MHfKz6aYpx')
        embed.addField("Discord Support:", "[>>LINK<<](https://discord.gg/MHfKz6aYpx)")
	    .setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg')
	    .setTimestamp();
        msg.channel.send(embed);
    }
};