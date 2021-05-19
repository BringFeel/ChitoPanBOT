module.exports = {
    name: 'avatar',
    aliases: ['av'],
    description: 'Muestra tu avatar o el de otro usuario',
    execute(msg, args) {
        const avatarEmbed = require('discord.js-avatar');
        avatarEmbed(msg, language = 'spanish');
    }
};
