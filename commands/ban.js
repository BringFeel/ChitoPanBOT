const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'sos pollo',
    execute(msg, args, client) {

        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send('No tienes permisos para usar este comando.')
        if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send('No tengo los permisos suficientes para este comando.')

        if(!args[0]) return msg.channel.send('Por favor especifica un usuario');

        let member;
        
        if (msg.mentions.members.length) {
            member = msg.mentions.members.first();
        } else {
            member = msg.guild.members.cache.get(args[0]);
        }

        if(!member) return msg.channel.send('Parece que no puedo encontrar a este usuario.');
        if(!member.bannable) return msg.channel.send('Este usuario no puede ser baneado, su rol más alto es más alto que el mío.');

        if(member.id === msg.author.id) return msg.channel.send('Boe, no te podes banear a vos mismo');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Sin especificar';

        member.ban({ reason: `${reason}` }).catch(err => { 
          msg.channel.send('Upa, Algo salió mal')
            console.log(err)
        })

        const banembed = new Discord.MessageEmbed()
        .setColor("#26FF82")
        .setTitle('Miembro baneado')
        .addField('Usuario Baneado', member)
        .addField('Baneado por', msg.author)
        .addField('Razón', reason)
        .setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg')
        .setTimestamp()

        msg.channel.send(banembed);


    }
}
