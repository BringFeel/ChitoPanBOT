const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Lista de los comandos disponibles.',
    execute(msg, args) {
        const commands = ['100', 'avatar', 'bastachicos', 'calmese', 'eu', 'furry',
        'gay', 'help', 'invite', 'otaku', 'ping', 'puto', 'up', "cs", "callao", "bi", "eta", "ey", "siri", "messirve", "nomessirve", "clown", "poc", "vinonico"];
        const embed = new Discord.MessageEmbed()
        .setTitle('Comandos')
        .setColor('#199057')
        .setAuthor('FranBOT', client.user.avatarURL, 'https://www.cobel-motion.xyz/FranBOT.html')
        .setDescription(`Comandos disponibles | ${commands.length} en total`)
        .setFooter('Fran-BOT#4390', 'https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096')
        .setTimestamp(new Date());
        for (let i = 0; i < commands.length; i++) {
            embed.addField(commands[i], client.commands.get(commands[i]).description);
        }
        msg.channel.send(embed);
    }
};
