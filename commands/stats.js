const Discord = require('discord.js');
os = require('os');

module.exports = {
    name: 'stats',
    description: 'Estadisticas repiolas',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setTitle(`Estadisticas`)
        .addField(`:desktop: So`, `${os.platform()}`, true)
        .addField(`:gear: Arquitectura`, `${os.arch()}`, true)
        .addField(`:rocket:  CPU`, `${os.cpus().map(i => `${i.model}`)[0]}`, true)
        .addField(`:pager: RAM`, `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, true)
        .addField(`:dividers: Lib`, `Discord.js ${Discord.version}`, true)
        .addField(`:map: Numero de Servidores`, `${client.guilds.cache.size}`, true)
        .setTimestamp();
        msg.channel.send(embed);
    }
};
