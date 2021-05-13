const Discord = require('discord.js');

module.exports = {
    name: 'helpcpb',
    description: 'Lista de los comandos disponibles.',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setAuthor('ChitoPanBot - Comandos', 'https://cdn.discordapp.com/attachments/795478872597594164/831749395309527040/homero_says_a.png', 'https://discord.gg/CzkSjzZ')
        .addField("**🎵 Musica:**", "`+clear-queue` `+filter` `+loop` `+nowplaying` `+pause` `+play` `+queue` `+resume` `+search` `+shuffle` `+skip` `+stop` `+volume` `+w-filters`", true)
        .addField("**🎚Filtros:**", "`8d` `gate` `haas` `phaser` `treble` `tremolo` `vibrato` `reverse` `karaoke` `flanger` `mcompand` `pulsator` `subboost` `bassboost` `vaporwave` `nightcore` `normalizer` `surrounding`", true)
        .addField("**🛡Moderación:**", "`+ban` ```Soon: +unban +kick +mute +unmute```", true)
        .addField("**🔎Otros Comandos:**", "`+help` `+invite` `+servidores` `+stats` `+ping` `+mcsrv` `+mcsrvapi` `+csgo` `+hm` `+avatar` `+abrazo` `+beso` `+caricia` `+lamida` `+sopapo` `+serverinfo` `+miembros` `+rol` `+rolinfo` `+bi` `+furry` `+gay` `+otaku` `+trapo`", true)
        .setColor('#26FF82')
        embed.setFooter('Owner: Fran...#1904 • Gracias por usar ChitoPanBOT', 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg');
        embed.setTimestamp();
        msg.author.send(embed);
    if(msg.author.bot) return;
    msg.channel.send(`${msg.author.toString()} Fijate tu md para ver los comandos!`)
    }
};
