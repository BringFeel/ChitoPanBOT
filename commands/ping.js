smodule.exports = {
  nombre: "ping",
  alias: [],
  descripcion: "Este comando te muestra el ping del BOT y de la AIP",
  run: (client, message, args) => {
    if (message.content.startsWith("+ping")) {
        message.channel.send("⚾__Con command Handler!__");
      }
    if (message.content === '+ping') {  
        message.channel.send(`🏓**Bot:** ${Date.now() - message.createdTimestamp}ms`);
      }
    if (message.content === '+ping') {  
        message.channel.send(`🌐**API:** -${Math.round(client.ws.ping)}ms`);
      }  
  }
}
