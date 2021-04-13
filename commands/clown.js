  
const Discord = require('discord.js');

module.exports = {
    name: 'clown',
    description: 'se te cayó tu identificación pa´',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF9F53').setTitle(`Tomá pibe`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/818486074379862016/se_te_cayo_esto.png').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
        msg.channel.send(embed);
    }
};
