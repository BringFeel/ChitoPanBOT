const Discord = require('discord.js');

module.exports = {
    name: 'stop',
    description: 'Detiene una canción',
    execute(msg, args) {
        const serverQueue = queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "Tienes que estar en un canal de voz para detener la música!"
            );

        if (!serverQueue)
            return message.channel.send("¡No hay canción que pueda detener!");

        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
}
