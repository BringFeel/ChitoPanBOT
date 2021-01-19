require('dotenv').config();
const TOKEN = process.env.TOKEN;
const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js')
const client = new Discord.Client();
const fs = require("fs");
var os = require('os');

client.login(TOKEN);

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())

var os = require('os-utils');

os.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
});

client.comandos = new Discord.Collection()

var d = new Date();
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());

client.on("ready", () => {
  console.log(`Ya estoy on pa´ en el ${client.user.tag}!`);
    client.user.setActivity("+help | que onda pibe", { type: "PLAYING"})

});

let prefix = "+";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "100")) {
    message.channel.send("https://www.cobel-motion.xyz/videos/cuanto-valen-los-helados-de-sien.mp4");
  }
  if (message.content.startsWith(prefix + "up?")) {
    message.channel.send("Estoy agarrando señal carnal");
  }
  if (message.content.startsWith(prefix + "invite")){
    message.channel.send("https://discord.com/oauth2/authorize?client_id=779841907484262421&scope=bot&permissions=0");
  }
  if (message.content.startsWith(prefix + "calmese")){
    message.channel.send("https://www.cobel-motion.xyz/videos/Calmese-Boludo.mp4");
  }
  if (message.content.startsWith(prefix + "eu")){
    message.channel.send("eu");
  }
  if (message.content.startsWith(prefix + 'avatar')) {
    const avatarEmbed = require('discord.js-avatar');
    avatarEmbed(message, language = 'spanish');
  }
  if (message.content.startsWith(prefix +"help")){
    message.channel.send({embed: {
      color: 199057,
      author: {
          icon_url: client.user.avatarURL
      },
      title: "Comandos",
      url: "https://www.cobel-motion.xyz/FranBOT.html",
      description: "Comandos disponibles. | 14 en total",
      fields: [{
          name: "+help",
          value: "Lista de los comandos disponibles."
        },
        {
          name: "+stats",
          value: "Estadisticas generales del bot."
        },
        {
          name: "+ping",
          value: "Ping del bot y la api."
        },
        {
          name: "+up?",
          value: "Bot up?."
        },
        {
          name: "+gay",
          value: "Porcentaje aleatorio de Gay."
        },
        {
          name: "+furry",
          value: "Porcentaje aleatorio de Furry.."
        },
        {
          name: "+otaku",
          value: "Porcentaje aleatorio de Otaku."
        },
        {
          name: "+web",
          value: "[Web](https://www.cobel-motion.xyz/FranBOT.html) oficial de FranBOT. (beta)"
        },
        {
          name: "+invite",
          value: "inviar al bot a tu discord"
        },
        {
          name: "+calmese",
          value: "Calmese boludo."
        },
        {
          name: "+xxx",
          value: "( ͡° ͜ʖ ͡°) (deshabilitado)"
        },
        {
          name: "+100",
          value: "cien"
        },
        
        {
          name: "+puto",
          value: "puto"
        },


        {
          name: "+avatar",
          value: "muestra tu avatar o el de otro usuario."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: "https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096",
        text: "Fran-BOT#4390"
      }
    }
});
}
if (message.content.startsWith(prefix +"web")){
  message.channel.send({embed: {
    color: 522310,
    author: {
        icon_url: client.user.avatarURL
    },
    title: "WEBSITE OFICIAL DE FRANBOT",
    url: "",
    description: "https://www.cobel-motion.xyz/FranBOT.html",
    timestamp: new Date(),
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096",
      text: "Fran-BOT#4390"
    }
  }
});
}
if (message.content.startsWith(prefix +"ping")){
  message.channel.send({embed: {
    color: 522310,
    author: {
        icon_url: client.user.avatarURL
    },
    title: "⚾__pong!__",
    url: "",
    description: "",
    fields: [{
        name: "Ping bot",
          value: `🏓**Ping Bot:** ${Date.now() - message.createdTimestamp}ms`
        },
        {
        name: "API discord",
        value: `🌐**Ping API:** -${Math.round(client.ws.ping)}ms`,
        }
      ],
    timestamp: new Date(),
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/779841907484262421/353e218ba30c538fea8684b62aedd13b.webp?size=4096",
      text: "Fran-BOT#4390"
    }
  }
});
}


  if(!message.content.startsWith(prefix)) {
    nivelesFunc(message)
    retrun;
  }
  
  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %=  86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %=  3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
  let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  if (message.content.startsWith(prefix + "stats")) {
    message.channel.send(`⏱**TIEMPO ENCENDIDO:** ${days} día/s , ${hours} hora/s, ${minutes} minuto/s y ${seconds} segúndo/s`);
  }
  if (message.content.startsWith(prefix + "stats")) {
    message.channel.send("📜**Comandos:** 14");
  }
 });

 client.on('message', message => {
  if (message.content === '+stats') {  
    message.channel.send(`🏓**Ping Bot:** ${Date.now() - message.createdTimestamp}ms`);
  }
});

client.on('message', message => {
  if (message.content === '+stats') {  
    message.channel.send(`🌐**Ping API:** -${Math.round(client.ws.ping)}ms`);
  }
});

client.on('message', message => {
  if (message.content === 'puto') {  
    message.channel.send(`te dicen`);
  }
});

client.on("message", message => {
  var Mensajes = ["0% Furry", "1% Furry", "2% Furry", "3% Furry", "4% Furry", "5% Furry", "6% Furry", "7% Furry", "8% Furry", "9% Furry", "10%  Furry", "11%  Furry", "12%  Furry", "13%  Furry", "14%  Furry", "15%  Furry", "16%  Furry", "17%  Furry", "18%  Furry", "19%  Furry", "20%  Furry", "21%  Furry", "22%  Furry", "23%  Furry", "24%  Furry", "25%  Furry", "26%  Furry", "27%  Furry", "28%  Furry", "29%  Furry", "30%  Furry", "31%  Furry", "32%  Furry", "33%  Furry", "34%  Furry", "35%  Furry", "36%  Furry", "37%  Furry", "38%  Furry", "39%  Furry", "40%  Furry", "41%  Furry", "42%  Furry", "43%  Furry", "44%  Furry", "45%  Furry", "46%  Furry", "47%  Furry", "48%  Furry", "49%  Furry", "50%  Furry", "51%  Furry", "52%  Furry", "53%  Furry", "54%  Furry", "55%  Furry", "56%  Furry", "57%  Furry", "58%  Furry", "59%  Furry", "60%  Furry", "61%  Furry", "62%  Furry", "63%  Furry", "64%  Furry", "65%  Furry", "66%  Furry", "67%  Furry", "68%  Furry", "69%  Furry", "70%  Furry", "71%  Furry", "72%  Furry", "73%  Furry", "74% Furry", "75%  Furry", "76%  Furry", "77%  Furry", "78%  Furry", "79%  Furry", "80%  Furry", "81%  Furry", "82%  Furry", "83%  Furry", "84%  Furry", "85%  Furry", "86%  Furry", "87%  Furry", "88%  Furry", "89%  Furry", "90%  Furry", "91%  Furry", "92%  Furry", "93%  Furry", "94%  Furry", "95%  Furry", "96%  Furry", "97%  Furry", "98%  Furry", "99%  Furry", "100% Furry", "512% Furry"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith('+furry')){
      message.channel.send(Mensajes[aleatorio]);
  }
});

client.on("message", message => {
  var Mensajes = ["0% Otaku", "1% Otaku", "2% Otaku", "3% Otaku", "4% Otaku", "5% Otaku", "6% Otaku", "7% Otaku", "8% Otaku", "9% Otaku", "10%  Otaku", "11%  Otaku", "12%  Otaku", "13%  Otaku", "14%  Otaku", "15%  Otaku", "16%  Otaku", "17%  Otaku", "18%  Otaku", "19%  Otaku", "20%  Otaku", "21%  Otaku", "22%  Otaku", "23%  Otaku", "24%  Otaku", "25%  Otaku", "26%  Otaku", "27%  Otaku", "28%  Otaku", "29%  Otaku", "30%  Otaku", "31%  Otaku", "32%  Otaku", "33%  Otaku", "34%  Otaku", "35%  Otaku", "36%  Otaku", "37%  Otaku", "38%  Otaku", "39%  Otaku", "40%  Otaku", "41%  Otaku", "42%  Otaku", "43%  Otaku", "44%  Otaku", "45%  Otaku", "46%  Otaku", "47%  Otaku", "48%  Otaku", "49%  Otaku", "50%  Otaku", "51%  Otaku", "52%  Otaku", "53%  Otaku", "54%  Otaku", "55%  Otaku", "56%  Otaku", "57%  Otaku", "58%  Otaku", "59%  Otaku", "60%  Otaku", "61%  Otaku", "62%  Otaku", "63%  Otaku", "64%  Otaku", "65%  Otaku", "66%  Otaku", "67%  Otaku", "68%  Otaku", "69%  Otaku", "70%  Otaku", "71%  Otaku", "72%  Otaku", "73%  Otaku", "74% Otaku", "75%  Otaku", "76%  Otaku", "77%  Otaku", "78%  Otaku", "79%  Otaku", "80%  Otaku", "81%  Otaku", "82%  Otaku", "83%  Otaku", "84%  Otaku", "85%  Otaku", "86%  Otaku", "87%  Otaku", "88%  Otaku", "89%  Otaku", "90%  Otaku", "91%  Otaku", "92%  Otaku", "93%  Otaku", "94%  Otaku", "95%  Otaku", "96%  Otaku", "97%  Otaku", "98%  Otaku", "99%  Otaku", "100% Otaku", "256% Otaku"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith('+otaku')){
      message.channel.send(Mensajes[aleatorio]);
  }
});

client.on("message", message => {
  var Mensajes = ["0% Gay", "1% Gay", "2% Gay", "3% Gay", "4% Gay", "5% Gay", "6% Gay", "7% Gay", "8% Gay", "9% Gay", "10%  Gay", "11%  Gay", "12%  Gay", "13%  Gay", "14%  Gay", "15%  Gay", "16%  Gay", "17%  Gay", "18%  Gay", "19%  Gay", "20%  Gay", "21%  Gay", "22%  Gay", "23%  Gay", "24%  Gay", "25%  Gay", "26%  Gay", "27%  Gay", "28%  Gay", "29%  Gay", "30%  Gay", "31%  Gay", "32%  Gay", "33%  Gay", "34%  Gay", "35%  Gay", "36%  Gay", "37%  Gay", "38%  Gay", "39%  Gay", "40%  Gay", "41%  Gay", "42%  Gay", "43%  Gay", "44%  Gay", "45%  Gay", "46%  Gay", "47%  Gay", "48%  Gay", "49%  Gay", "50%  Gay", "51%  Gay", "52%  Gay", "53%  Gay", "54%  Gay", "55%  Gay", "56%  Gay", "57%  Gay", "58%  Gay", "59%  Gay", "60%  Gay", "61%  Gay", "62%  Gay", "63%  Gay", "64%  Gay", "65%  Gay", "66%  Gay", "67%  Gay", "68%  Gay", "69%  Gay", "70%  Gay", "71%  Gay", "72%  Gay", "73%  Gay", "74% Gay", "75%  Gay", "76%  Gay", "77%  Gay", "78%  Gay", "79%  Gay", "80%  Gay", "81%  Gay", "82%  Gay", "83%  Gay", "84%  Gay", "85%  Gay", "86%  Gay", "87%  Gay", "88%  Gay", "89%  Gay", "90%  Gay", "91%  Gay", "92%  Gay", "93%  Gay", "94%  Gay", "95%  Gay", "96%  Gay", "97%  Gay", "98%  Gay", "99%  Gay", "100% Gay", "325619% Gay"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith('+gay')){
      message.channel.send(Mensajes[aleatorio]);
  }
});


 client.login(TOKEN);
