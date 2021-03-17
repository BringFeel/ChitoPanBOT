const Discord = require('discord.js');

module.exports = {
    name: 'help2',
    description: 'Lista de los comandos disponibles.',
    execute(msg, args) {
        const commands = ["eta", "ey", "siri", "messirve", "nomessirve", "clown", "poc", "vinonico", "buendia"];
        const embed = new Discord.MessageEmbed()
        .setTitle('Comandos | 3/3')
        .setColor('#199057')
        .setDescription(`Comandos disponibles | ${commands.length} en total`)
        .setFooter('Fran-BOT#4390', 'https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096')
        .setTimestamp(new Date());
        for (let i = 0; i < commands.length; i++) {
            embed.addField(commands[i], client.commands.get(commands[i]).description);
        }
        msg.channel.send(embed);
    }
};
