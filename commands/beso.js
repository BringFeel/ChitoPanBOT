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
    aC.setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
    aC.setColor('#2636FF')
	msg.channel.send(aC);
    }
}
};