const Discord = require("discord.js")
const star = require('star-labs');

module.exports = {
    name: 'abrazo',
    description: 'UwU',
    execute(msg, args) {
        let command = 'abrazo';
        if(command === 'abrazo'){
	let aA = msg.author
	let aB = msg.mentions.users.first()
	if(!aB) return msg.channel.send(`${msg.author.toString()} Menciona a 1 usuario para darle un abrazo.`);
	const aC = new Discord.MessageEmbed()
    .setTitle(aA.tag+' abrazó a '+aB.tag)
    .setImage(star.hug())
    aC.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg').setTimestamp();
    aC.setColor('#2636FF')
	msg.channel.send(aC);
    }
}
};
