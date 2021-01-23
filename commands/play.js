const Discord = require('discord.js');

module.exports = {
  name: 'play',
  description: 'Reproduce una canción de YouTube',
  execute(msg, args) {
    if (args.length) {
      executePlay(msg, queue.get(msg.guild.id));
      return;
    } else {
      return msg.channel.send({
        embed: {
          color: 522310,
          author: {
            icon_url: client.user.avatarURL
          },
          title: "Tenés que ingresar una canción!",
          url: "",
          description: ``,
          timestamp: new Date(),
          footer: {
            icon_url: "https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096",
            text: "Fran-BOT#4390"
          }
        }
      });
    }
  }
};

async function executePlay(msg, serverQueue) {
  const args = msg.content.split(" ");

  const voiceChannel = msg.member.voice.channel;
  if (!voiceChannel)
    return msg.channel.send({
      embed: {
        color: 16711680,
        author: {
          icon_url: client.user.avatarURL
        },
        title: "Tenés que estar conectado a un canal de voz para poder reproducir musica",
        url: "",
        description: ``,
        timestamp: new Date(),
        footer: {
          icon_url: "https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096",
          text: "Fran-BOT#4390"
        }
      }
    });

  const permissions = voiceChannel.permissionsFor(msg.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return msg.channel.send({
      embed: {
        color: 16711680,
        author: {
          icon_url: client.user.avatarURL
        },
        title: "Necesito permisos para unirme a este canal de voz",
        url: "",
        description: ``,
        timestamp: new Date(),
        footer: {
          icon_url: "https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096",
          text: "Fran-BOT#4390"
        }
      }
    });
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url,
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(msg.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(msg.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(msg.guild.id);
      return msg.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return msg.channel.send({
      embed: {
        color: 522310,
        author: {
          icon_url: client.user.avatarURL
        },
        title: "Canción agregada a la cola",
        url: "",
        description: `${song.title}`,
        timestamp: new Date(),
        footer: {
          icon_url: "https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096",
          text: "Fran-BOT#4390"
        }
      }
    });
  }
}

function play(guild, song) {
  if (typeof song === 'undefined') {
    return;
  }
  const serverQueue = queue.get(guild.id);
  if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else {
    message.channel.send("Ingresa un comando valido!");
  }
});
}
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send({
    embed: {
      color: 522310,
      author: {
        icon_url: client.user.avatarURL
      },
      title: `Reproduciendo ahora`,
      url: "",
      description: `${song.title}`,
      timestamp: new Date(),
      footer: {
        icon_url: "https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096",
        text: "Fran-BOT#4390"
      }
    }
  });
}
