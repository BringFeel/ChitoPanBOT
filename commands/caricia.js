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
    aC.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg').setTimestamp();
    aC.setColor('#26FF82')
	msg.channel.send(aC);
    }
}
};
