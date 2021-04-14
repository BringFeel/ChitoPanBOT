const Discord = require('discord.js');

module.exports = {
    name: 'rolinfo',
    description: 'info de los permisos a cambiar para los roles.',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        if (!msg.member.hasPermission(['MANAGE_ROLES'])) return msg.channel.send('¡No tienes permiso para ejecutar este comando!')
        .setAuthor('ChitoPanBot - Comandos', 'https://cdn.discordapp.com/attachments/795478872597594164/831749395309527040/homero_says_a.png', 'https://discord.gg/CzkSjzZ')
        .addField("___***Permisos:***___", "CREATE_INSTANT_INVITE" + "\nKICK_MEMBERS" + "\nBAN_MEMBERS" + "\nADMINISTRATOR" + "\nMANAGE_CHANNELS" + "\nMANAGE_GUILD" + "\nADD_REACTIONS", true)
        .addField("___***Permisos:***___", "READ_MESSAGES" + "\nSEND_MESSAGES" + "\nSEND_TTS_MESSAGES" + "\nMANAGE_MESSAGES" + "EMBED_LINKS" + "\nATTACH_FILES" + "\nREAD_msg_HISTORY", true)
        .addField("___***Permisos:***___", "MENTION_EVERYONE" + "\nEXTERNAL_EMOJIS" + "\nCONNECT" + "\nSPEAK" + "\nMUTE_MEMBERS" + "\nDEAFEN_MEMBERS" + "\nMOVE_MEMBERS", true)
        .addField("___***Permisos:***___", "USE_VAD" + "\nCHANGE_NICKNAME" + "\nMANAGE_NICKNAMES" + "\nMANAGE_ROLES_OR_PERMISSIONS" + "\nMANAGE_WEBHOOKS" + "\nMANAGE_EMOJIS", true)
        .setColor('#2636FF')
        embed.setFooter('ChitoPanBOT#4390');
        embed.setTimestamp();
    msg.channel.send(embed);
    }
};