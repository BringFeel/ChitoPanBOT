module.exports = {
    name: 'eu',
    description: 'Tells the bot to reply with \"Pong!\"',
    execute(msg, args) {
        msg.channel.send("eu");
    }
};