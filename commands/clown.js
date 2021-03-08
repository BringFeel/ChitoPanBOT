  
const Discord = require('discord.js');

module.exports = {
    name: 'clown',
    description: 'se te cayó tu identificación pa´',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF9F53').setImage('https://cdn.discordapp.com/attachments/795478872597594164/818486074379862016/se_te_cayo_esto.png').setTimestamp();
        msg.channel.send(embed);
    }
};
