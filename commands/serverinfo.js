const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Info del server',
    execute(msg, args) {
    var server = msg.guild;
    
    
    const embed = new Discord.MessageEmbed()
    .setTitle("**SERVERINFO**")
    .setDescription("**INFORMACIÓN ACTUAL DEL SERVIDOR**")
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField('**FECHA DE CREACIÓN**',`${server.createdAt}`)
    .addField("**REGIÓN**", msg.guild.region)
    .addField("**DUEÑO DEL SERVIDOR**",`${server.owner.user}`)
    .addField(`**CANALES** [${server.channels.cache.size}]ㅤㅤ`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)
    .addField('**MIEMBROS**', server.memberCount, true)
    .addField('**EMOJIS**',msg.guild.emojis.cache.size)
    .addField('**BOOSTER**',msg.guild.premiumSubscriptionCount.toString())
    .addField('**NIVEL DE VERIFICACIÓN**',`${server.verificationLevel}`)
    .addField('**ROLES**', server.roles.cache.size,true)
    embed.setFooter(`ChitoPanBOT#4390 • Server ID: ${server.id}`, 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg')
    .setTimestamp()
    .setColor("#26FF82")
    msg.channel.send(embed);
}
};
