const Discord = require("discord.js")
const star = require('star-labs');

module.exports = {
    name: 'lamida',
    description: 'UwU',
    execute(msg, args) {
        let command = 'lamida';
        if(command === 'lamida'){
	let aA = msg.author
	let aB = msg.mentions.users.first()
	if(!aB) return msg.channel.send(`${msg.author.toString()} Menciona a 1 usuario para darle una lamida 😳`);
	const aC = new Discord.MessageEmbed()
    .setTitle(aA.tag+' está lamiendo el cuerpo de '+aB.tag)
    .setImage(star.lick())
    aC.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg').setTimestamp();
    aC.setColor('#26FF82')
	msg.channel.send(aC);
    }
}
};
