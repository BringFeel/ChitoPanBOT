module.exports = {
    name: 'ban',
    description: 'banea al que se hace el piola',
    execute(msg, args) {
        if (msg.member.hasPermission("BAN_MEMBERS")) {
    if (msg.members.mentions.first()) {
        try {
            msg.members.mentions.first().ban();
        } catch {
            msg.reply("Dame permisos de ban wacho porque si no viste, como que no puedo banear" + msg.members.mentions.first());
        }
    } else {
        msg.reply("No tenés permisos de ban pibe" + msg.members.mentions.first());
    }
}
    }
};
