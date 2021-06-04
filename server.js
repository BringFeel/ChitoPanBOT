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

const channelId = '831676014718353419';
const channel = client.channels.cache.get(channelId);


const upembed = new Discord.MessageEmbed()
  .setTimestamp()
  .setTitle("Mensaje directo")
  .addField("Enviado por:", `<@${message.author.id}>`)
  .setColor("RANDOM")
  .setDescription(`**Mensaje:** \n${message.content}`)
  .setFooter("Mensaje al MD");


channel.send(upembed)
}
});

client.on("ready", async () => {
const channelId = '831673670338347031';
  const channel = client.channels.cache.get(channelId);
  const upembed = new Discord.MessageEmbed()
  .setTitle("Bot online...")
  .setColor('RANDOM')
  .setDescription("Me acaban de Prender/Reiniciar")
  .setFooter(`Ahora mismo estoy en ${client.guilds.cache.size} Servers!`)
  .setThumbnail('https://cdn.discordapp.com/attachments/831975734070476861/831975761229119519/2705.png')
  .setTimestamp()
  channel.send(upembed)
})

client.on('guildCreate', guild => console.info(`Entré a "${guild.name}"`));

client.on("message", (msg) => {
  let args = msg.content.split(/ +/);
  let command = args.shift().toLowerCase().substring(prefix.length);

  if (!msg.content.startsWith(prefix) || !client.commands.has(command) || msg.author.bot) return;

  try {
    console.info(`${msg.author.tag} issued command "${msg.content}" on guild "${msg.guild.name}"`);
    const channelId = '831983234098135101';
    const channel = client.channels.cache.get(channelId);


    const upembed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Comandos...")
    .addField("Ejecutado por:", `<@${msg.author.id}>`)
    .addField("En el servidor:", `${msg.guild.name}`)
    .setColor("RANDOM")
    .setDescription(`**Comando:** \n${msg.content}`)
    .setFooter("Comando Ejecutado");


    channel.send(upembed)
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('hubo un error al ejecutar ese comando.');
  }
});

client.login(TOKEN);
