const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Link de invitación del bot',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle('ChitoPanBOT Invite:')
	    .setURL('https://chitopanbotinvite.cobel-motion.xyz/')
        embed.addField("Link de invitación:", "[>>LINK<<](https://chitopanbotinvite.cobel-motion.xyz/)")
	    .setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg')
	    .setTimestamp();
        msg.channel.send(embed);
    }
};
