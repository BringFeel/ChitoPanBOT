const Discord = require('discord.js');

module.exports = {
    name: 'bolamad',
    description: 'madolam',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle(`M  A  D  O  L  A  M`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/824836743005732864/Screenshot_20210325-234508_Discord.jpg').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg').setTimestamp();
        msg.channel.send(embed);
    }
};
