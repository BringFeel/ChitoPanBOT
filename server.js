require('dotenv').config();
const TOKEN = process.env.TOKEN;
const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
client = new Discord.Client();
client.commands = new Discord.Collection();
queue = new Map();
ytdl = require("ytdl-core");
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
  client.user.setActivity("+help | que onda pibe", { type: "LISTENING" })
  bot.guilds.cache.each(guild => console.info(`Presente en el servidor "${guild.name}"`));
});

client.on('guildCreate', guild => console.info(`Entré a "${guild.name}"`));

client.on("message", (msg) => {
  let args = msg.content.split(/ +/);
  let command = args.shift().toLowerCase().substring(bot.prefix.length);

  if (!msg.content.startsWith(prefix) || !client.commands.has(command) || msg.author.bot) return;

  try {
    console.info(`${msg.author.tag} issued command "${msg.content}" on guild "${msg.guild.name}"`);
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('hubo un error al ejecutar ese comando.');
  }
});

client.login(TOKEN);
