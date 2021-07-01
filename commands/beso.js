const Discord = require("discord.js")
const ainasepics = require("ainasepics")
let kissGif = ainasepics.kiss()

module.exports = {
    name: 'beso',
    description: 'UwU',
    execute(msg, args) {
        let kissGif = ainasepics.kiss()
        let command = 'beso';
        if(command === 'beso'){
	let aA = msg.author
	let aB = msg.mentions.users.first()
	if(!aB) return msg.channel.send(`${msg.author.toString()} Menciona a 1 usuario para darle un beso :3`);
	const aC = new Discord.MessageEmbed()
    .setTitle(aA.tag+' le dio un beso a '+aB.tag)
    .setImage(kissGif)
    aC.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg').setTimestamp();
    aC.setColor('#2636FF')
	msg.channel.send(aC);
    }
}
};
