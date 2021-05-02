const Discord = require('discord.js');

module.exports = {
    name: 'rolinfo',
    description: 'info de los permisos a cambiar para los roles.',
    execute(msg, args) {
        if (!msg.member.hasPermission(['MANAGE_ROLES'])) return msg.channel.send('¡No tienes permiso para ejecutar este comando!')
        const embed = new Discord.MessageEmbed()
        .setAuthor('ChitoPanBot - Permisos disponibles para cambiar', 'https://cdn.discordapp.com/attachments/795478872597594164/831749395309527040/homero_says_a.png', 'https://discord.gg/CzkSjzZ')
        .addField("___***Permisos:***___", "CREATE_INSTANT_INVITE" + "\nKICK_MEMBERS" + "\nBAN_MEMBERS" + "\nADMINISTRATOR" + "\nMANAGE_CHANNELS" + "\nMANAGE_GUILD" + "\nADD_REACTIONS", true)
        .addField("___***Permisos:***___", "READ_MESSAGES" + "\nSEND_MESSAGES" + "\nSEND_TTS_MESSAGES" + "\nMANAGE_MESSAGES" + "EMBED_LINKS" + "\nATTACH_FILES" + "\nREAD_msg_HISTORY", true)
        .addField("___***Permisos:***___", "MENTION_EVERYONE" + "\nEXTERNAL_EMOJIS" + "\nCONNECT" + "\nSPEAK" + "\nMUTE_MEMBERS" + "\nDEAFEN_MEMBERS" + "\nMOVE_MEMBERS", true)
        .addField("___***Permisos:***___", "USE_VAD" + "\nCHANGE_NICKNAME" + "\nMANAGE_NICKNAMES" + "\nMANAGE_ROLES_OR_PERMISSIONS" + "\nMANAGE_WEBHOOKS" + "\nMANAGE_EMOJIS", true)
        .setColor('#26FF82')
        embed.setFooter('ChitoPanBOT#4390', "https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg");
        embed.setTimestamp();
    msg.author.send(embed);
    if(msg.author.bot) return;
    msg.channel.send(`${msg.author.toString()} Fijate tu md para ver los permisos!`)
    }
};
