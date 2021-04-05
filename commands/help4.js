const Discord = require('discord.js');

module.exports = {
    name: 'help4',
    description: 'Lista de los comandos disponibles.',
    execute(msg, args) {
        const commands = ["buendia", "jueves", "dato", "bomdia", "whoping"];
        const embed = new Discord.MessageEmbed()
        .setTitle('Comandos | 4/4')
        .setColor('#199057')
        .setDescription(`Comandos disponibles | ${commands.length} en total`)
        .setFooter('ChitoPanBOT#4390', 'https://cdn.discordapp.com/attachments/795478872597594164/828373150382161970/a.jpg')
        .setTimestamp(new Date());
        for (let i = 0; i < commands.length; i++) {
            embed.addField(commands[i], client.commands.get(commands[i]).description);
        }
        msg.channel.send(embed);
    }
};
