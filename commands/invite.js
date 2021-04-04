const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Link de invitación del bot',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#5965FF').setTitle('ChitoPanBOT Invite:')
	    .setURL('https://chitopanbotinvite.cobel-motion.xyz/')
	    .setDescription('https://chitopanbotinvite.cobel-motion.xyz/').setTimestamp();
        msg.channel.send(embed);
    }
};
