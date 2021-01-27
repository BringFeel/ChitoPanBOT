const Discord = require('discord.js');

module.exports = {
    name: 'bastachicos',
    description: 'Basta Chicos',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setImage('https://cdn.discordapp.com/attachments/726437915197964338/802306022727352370/eyc9fJ.gif').setTimestamp().setFooter(`${msg.author.tag}`, `${message.author.avatarURL}`)();
        msg.channel.send(embed);
    }
};
