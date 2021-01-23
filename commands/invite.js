module.exports = {
    name: 'invite',
    description: 'Link de invitación del bot',
    execute(msg, args) {
        msg.channel.send("https://discord.com/oauth2/authorize?client_id=779841907484262421&scope=bot&permissions=0");
    }
};