require('dotenv').config();
const TOKEN = process.env.TOKEN;
const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
client = new Discord.Client();
client.commands = new Discord.Collection();
queue = new Map();
fs = require("fs");
const os = require('os');
const botCommands = require('./commands');
const prefix = "+";

Object.keys(botCommands).map(key => {
  client.commands.set(botCommands[key].name, botCommands[key]);
});

client.comandos = new Discord.Collection()

var d = new Date();
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());

client.on("ready", () => {
  console.log(`Ya estoy on pa´ en el ${client.user.tag}!`);
  client.user.setPresence({
    status: 'dnd',
    activity: {
        name: '+help | zzzzzzap!',
        type: 'PLAYING',
        url: 'https://www.twitch.tv/fran__cm'
    }
  })
  client.guilds.cache.each(guild => console.info(`Presente en el servidor "${guild.name}"`));
});
client.on("message", message => {
              
  if (message.channel.type === "dm") {
    if(message.author.bot) return;

    console.log(`Mensaje directo enviado por: ${message.author.id}\nMensaje: ${message.content}`);
}
});

client.on("guildCreate", guild => {
  console.log(`Entré a un nuevo servidor: ${guild.name} (id: ${guild.id}). Este servidor tiene ${guild.memberCount} miembros!`);
});

client.on("guildDelete", guild => {
  console.log(`Me rajaron de: ${guild.name} (id: ${guild.id})`);
});

client.on("message", (msg) => {
  let args = msg.content.split(/ +/);
  let command = args.shift().toLowerCase().substring(prefix.length);

  if (!msg.content.startsWith(prefix) || !client.commands.has(command) || msg.author.bot) return;

  try {
    console.info(`${msg.author.tag} issued command "${msg.content}" on guild "${msg.guild.name}"`);
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('hubo un error al ejecutar ese comando.');
  }
});

client.login(TOKEN);
