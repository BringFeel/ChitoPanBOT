const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send('You can\'t use that!')
        if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send('I don\'t have the right permissions.')

        const member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]);

        if(!args[0]) return msg.channel.send('Please specify a user');

        if(!member) return msg.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        if(!member.bannable) return msg.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');

        if(member.id === msg.author.id) return msg.channel.send('Bruh, you can\'t ban yourself!');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.ban(`${reason}`).catch(err => { 
          message.channel.send('Something went wrong')
            console.log(err)
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Kicked by', msg.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        msg.channel.send(banembed);


    }
}
