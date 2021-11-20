const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Link de invitación del bot',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle('ChitoPanBOT Invite:')
	    .setURL('https://discord.com/oauth2/authorize?client_id=779841907484262421&scope=bot&permissions=0/')
        embed.addField("Link de invitación:", "[>>LINK<<](https://discord.com/oauth2/authorize?client_id=779841907484262421&scope=bot&permissions=0/)")
	    .setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg')
	    .setTimestamp();
        msg.channel.send(embed);
    }
};
