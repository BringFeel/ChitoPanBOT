const http = require("http");
const express = require("express");
const app = express();

//
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

/////////////////////////////////////////////BOT REAL//////////////////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
function presence(){
   client.user.setPresence({
      status: "online",
      game: {
         name: "QUEMAMO UNO?",
         type: "PLAYING"
      }
   });
}
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setPresence( {
       status: "online",
       game: {
           name: "QUEMAMO UNO?",
           type: "PLAYING"
       }
   } );

});
var prefix = config.prefix;

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "stop")) {
    message.channel.send("chau");
  } else if (message.content.startsWith(prefix + "website")) {
    message.channel.send(
      "__***no tenemos página web por ahora pero escuchate este temazo papá https://www.youtube.com/watch?v=6FprcrtZTrc***__"
   )
  } else if (message.content.startsWith(prefix + "ip")) {
    message.channel.send({
      embed: {
        color: 564300,
        description: "__***NA:***__ mc.cobel-motion.xyz | __***SA:***__ cobelmotion.minehost.com.ar"
      } 
    });
  }
});
client.login(config.token);