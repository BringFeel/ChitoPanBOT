const Discord = require('discord.js');

module.exports = {
    name: 'miembros',
    description: 'Miembros en total',
    execute(msg, args) {
    var server = msg.guild;
    
    const embed = new Discord.MessageEmbed()
    .addField('**MIEMBROS**', server.memberCount, true)
    .setColor("#26FF82")
    msg.channel.send(embed);
}
};