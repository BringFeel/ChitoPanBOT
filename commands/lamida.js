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
    aC.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg').setTimestamp();
    aC.setColor('#26FF82')
	msg.channel.send(aC);
    }
}
};
