const Discord = require("discord.js")
const star = require('star-labs');

module.exports = {
    name: 'sopapo',
    description: 'XD',
    execute(msg, args) {
        let command = 'sopapo';
        if(command === 'sopapo'){
	let aA = msg.author
	let aB = msg.mentions.users.first()
	if(!aB) return msg.channel.send(`${msg.author.toString()} Menciona a 1 usuario para darle un sopapo.`);
	const aC = new Discord.MessageEmbed()
    .setTitle(aA.tag+' le encajó un sopapo a '+aB.tag)
    .setImage(star.slap())
    aC.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg').setTimestamp();
    aC.setColor('#26FF82')
	msg.channel.send(aC);
    }
}
};
