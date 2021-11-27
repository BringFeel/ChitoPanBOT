const Discord = require("discord.js")
const star = require('star-labs');

module.exports = {
    name: 'sopapo',
    description: 'sopapo',
    execute(msg, args) {
        let command = 'sopapo';
        if(command === 'sopapo'){
	let aA = msg.author
	let aB = msg.mentions.users.first()
	if(!aB) return msg.channel.send(`${msg.author.toString()} Menciona a 1 usuario para darle un sopapo.`);
	const aC = new Discord.MessageEmbed()
    .setTitle(aA.tag+' le encajó un sopapo a '+aB.tag)
    .setImage(star.slap())
    aC.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg').setTimestamp();
    aC.setColor('#26FF82')
	msg.channel.send(aC);
    }
}
};
