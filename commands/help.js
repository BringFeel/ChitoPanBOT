const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Lista de los comandos disponibles.',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setAuthor('ChitoPanBot - Comandos', 'https://cdn.discordapp.com/attachments/795478872597594164/831749395309527040/homero_says_a.png', 'https://discord.gg/CzkSjzZ')
        .addField("___***Info:***___", "**+invite**" + "\nInvitación del bot" + "\n**+servidores**" + "\nServidores en total que tiene ChitoPanBOT"  + "\n**+stats**" + "\nInfo general de ChitoPanBOT" + "\n**+ping**" + "\nPing del bot" + "**\n+mcsrv**" + "\nPing a un servidor de minecraft" + "\n**+mcsrvapi**" + "\nAPIs usadas para +mcsrv" + "\n**+csgo**" + "\nInfo sobre tu cuenta de csgo", true)
        .addField("___***Usuario:***___", "**+avatar**" + "\nMuestra el avatar del usuario mencionado" + "**\n+abrazo**" + "\nDale un abrazo a alguien :3" + "**\n+beso**" + "\nDale un beso a alguien UwU" + "**\n+caricia**" + "\nDale una caricia a alguien :3" + "**\n+lamida**" + "\nLame el cuerpo de alguien OwO" + "**\n+sopapo**" + "\nEncajale un sopapo a alguien", true)
        .addField("___***Server:***___", "**+serverinfo**" + "\nInfo del servidor" + "\n**+miembros**" + "\nMiembros totales en el servidor" + "\n**+rol**" + "\nCambia los permisos de un rol" + "\n**+rolinfo**" + "\nPermisos disponibles para cambiar", true)
        .addField("___***Random:***___", "**+bi**" + "\nPorcentaje aleatorio de bisexual" + "\n**+furry**" + "\nPorcentaje aleatorio de furry" + "\n**+gay**" + "\nPorcentaje aleatorio de gay"  + "\n**+otaku**" + "\nPorcentaje aleatorio de otaku" + "\n**+trapo**" + "\nPorcentaje aleatorio de trapito", true)
        .setColor('#26FF82')
        embed.setFooter('Owner: Fran...#1904 • Gracias por usar ChitoPanBOT', 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg');
        embed.setTimestamp();
        msg.author.send(embed);
    if(msg.author.bot) return;
    msg.channel.send(`${msg.author.toString()} Fijate tu md para ver los comandos!`)
    }
};
