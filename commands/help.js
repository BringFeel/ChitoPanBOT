const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Lista de los comandos disponibles.',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setAuthor('ChitoPanBot - Comandos', 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg', 'https://discord.gg/CzkSjzZ')
        .addField("**🛡Moderación:**", "`+ban` ```Soon: +unban +kick +mute +unmute```", true)
        .addField("**🔎Otros Comandos:**", "`+help` `+invite` `+servidores` `+stats` `+ping` `+mcsrv` `+mcsrvapi` `+csgo` `+hm` `+avatar` `+abrazo` `+beso` `+caricia` `+lamida` `+sopapo` `+serverinfo` `+miembros` `+rol` `+rolinfo` `+bi` `+furry` `+gay` `+otaku` `+trapo`", true)
        .setColor('#26FF82')
        embed.setFooter('Owner: Bring Feel#2098 • Gracias por usar ChitoPanBOT', 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg');
        embed.setTimestamp();
        msg.author.send(embed);
    if(msg.author.bot) return;
    msg.channel.send(`${msg.author.toString()} Fijate tu md para ver los comandos!`)
    }
};
