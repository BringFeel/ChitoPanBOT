const Discord = require("discord.js")
const star = require('star-labs');

module.exports = {
    name: 'caricia',
    description: 'UwU',
    execute(msg, args) {
        let command = 'caricia';
        if(command === 'caricia'){
	let aA = msg.author
	let aB = msg.mentions.users.first()
	if(!aB) return msg.channel.send(`${msg.author.toString()} Menciona a 1 usuario para darle una caricia.`);
	const aC = new Discord.MessageEmbed()
    .setTitle(aA.tag+' se encuentra acariciando a '+aB.tag)
    .setImage(star.pat())
    aC.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg').setTimestamp();
    aC.setColor('#26FF82')
	msg.channel.send(aC);
    }
}
};
