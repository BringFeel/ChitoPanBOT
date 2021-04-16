const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Lista de los comandos disponibles.',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setAuthor('ChitoPanBot - Comandos', 'https://cdn.discordapp.com/attachments/795478872597594164/831749395309527040/homero_says_a.png', 'https://discord.gg/CzkSjzZ')
        .addField("___***Meming:***___", "**+100**" + "\nCuanto valen los elaos de sien?" + "\n**+bastachicos**" + "\nRicardo fort says bastachicos" + "\n**+bolam**" + "\nBlp" + "\n**+bolam**" + "\nBolam modo mad" + "\n**+bomdia**" + "\nBom dia caralho" + "\n**+buendia**" + "\nBuen día grupo", true)
        .addField("___***Meming:***___", "**+cague**" + "\nDeiGamer says cagué" + "\n**+callao**" + "\nCallao lacra" + "\n**+calmese**" + "\nCalmese boludo" + "\n**+clown**" + "\nTomá tu identificación" + "\n**+dato**" + "\nQue buen dato man" + "\n**+eta**" + "\nEta pooo" + "\n**+eu**" + "\nEu", true)
        .addField("___***Meming:***___", "**+ey**" + "\nEyeyeyey my boy" + "\n**+jueves**" + "\nFeliz jueves"  + "\n**+messirve**" + "\nMessirve 😎"  + "\n**+nomessirve**" + "\nNomessirve 😥"  + "\n**+poc**" + "\nPoc?"  + "\n**+puto**" + "\n..."  + "\n**+siri**" + "\n._.", true)
        .addField("___***Meming:***___", "**+up?**" + "\nBot up?" + "\n**+vinonico**" + "\nUy" + "\n**+wachin**" + "\nXD?"  + "\n**+whoping**" + "\nQuien pingueo?" + "\n**+xxx**" + "\nApa" + "\n**+stin**" + "\n.___." + "\n**+blp**" + "\nBolam la paloma", true)
        .addField("___***Info:***___", "**+invite**" + "\nInvitación del bot" + "\n**+servidores**" + "\nServidores en total que tiene ChitoPanBOT"  + "\n**+stats**" + "\nInfo general de ChitoPanBOT", true)
        .addField("___***Admin:***___", "**+rol**" + "\nCambia los permisos de un rol" + "\n**+rolinfo**" + "\nPermisos disponibles para cambiar", true)
        .addField("___***Minecraft:***___", "**+mcsrv**" + "\nPing a un servidor de minecraft" + "\n**+mcsrvapi**" + "\nAPIs usadas para +mcsrv", true)
        .addField("___***CounterStrike:***___", "**+cs**" + "\nInfo del servidor para Counter Strike 1.6" + "\n**+csgo**" + "\nInfo sobre tu cuenta de csgo", true)
        .addField("___***Usuario:***___", "**+avatar**" + "\nMuestra el avatar del usuario mencionado" + "**+abrazo**" + "\nDale un abrazo a alguien :3" + "**+beso**" + "\nDale un beso a alguien UwU", true)
        .addField("___***Random:***___", "**+bi**" + "\nPorcentaje aleatorio de bisexual" + "\n**+furry**" + "\nPorcentaje aleatorio de furry" + "\n**+gay**" + "\nPorcentaje aleatorio de gay"  + "\n**+otaku**" + "\nPorcentaje aleatorio de otaku", true)
        .setColor('#26FF82')
        embed.setFooter('Owner: Fran...#1904 • Gracias por usar ChitoPanBOT');
        embed.setTimestamp();
        msg.author.send(embed);
    if(msg.author.bot) return;
    msg.channel.send(`${msg.author.toString()} Fijate tu md para ver los comandos!`)
    }
};
