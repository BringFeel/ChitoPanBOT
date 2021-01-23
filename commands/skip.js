const Discord = require('discord.js');

module.exports = {
  name: 'skip',
  description: 'Salta una canción',
  execute(msg, args) {
    const serverQueue = queue.get(message.guild.id);
    if (!msg.member.voice.channel)
      return msg.channel.send(
        "Tienes que estar en un canal de voz para saltar la música!"
      );
    if (!serverQueue)
      return msg.channel.send("¡No hay canción que pueda saltarme!");
    serverQueue.connection.dispatcher.end();
  }
}
