const { stripIndents } = require("common-tags");
const Discord = require('discord.js')
const allPerm = [
        'CREATE_INSTANT_INVITE',
        'KICK_MEMBERS',
        'BAN_MEMBERS',
        'ADMINISTRATOR',
        'MANAGE_CHANNELS',
        'MANAGE_GUILD',
        'ADD_REACTIONS',
        'READ_MESSAGES',
        'SEND_MESSAGES',
        'SEND_TTS_MESSAGES',
        'MANAGE_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_msg_HISTORY',
        'MENTION_EVERYONE',
        'EXTERNAL_EMOJIS',
        'CONNECT',
        'SPEAK',
        'MUTE_MEMBERS',
        'DEAFEN_MEMBERS',
        'MOVE_MEMBERS',
        'USE_VAD',
        'CHANGE_NICKNAME',
        'MANAGE_NICKNAMES',
        'MANAGE_ROLES_OR_PERMISSIONS',
        'MANAGE_WEBHOOKS',
        'MANAGE_EMOJIS',
    ];
    module.exports = {
        name: 'rol',
        description: 'Cambia permisos de un rol',
        execute(msg, args) {
    if (args.length < 2) return msg.reply('Por favor especifica un rol o un permiso');
    let targetRole = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0]) || msg.guild.roles.find(role => role.name === args[0]);
    let targetPermission = args[1];
    if (!msg.member.hasPermission(['MANAGE_ROLES'])) return msg.channel.send('¡No tienes permiso para ejecutar este comando!');
    if (!targetRole.editable) return msg.reply('No puedo editar este rol');
    if (!targetRole) return msg.channel.send(`**${args[0]}** no es un rol válido, ¿lo escribiste correctamente?`);
    if (!allPerm.includes(targetPermission)) return msg.channel.send(`Permiso no válido, utilice 1 de :\n ${allPerm.join('\n')}`);
    const currectPermmission = new Discord.Permissions(targetRole.permissions);
    let newTargetRolePermissions = currectPermmission.has(targetPermission) ? currectPermmission.remove(targetPermission) : currectPermmission.add(targetPermission);
    console.log(newTargetRolePermissions.toArray());
    targetRole
        .setPermissions(newTargetRolePermissions.toArray())
        .then(newRolePerm => {
            let embed = new Discord.MessageEmbed();
            var serverIcon = msg.guild.iconURL();
            embed.setAuthor(`${msg.guild.name} ― editando rol **${targetRole.name}**`, msg.guild.iconURL);
            embed.setColor('#26FF82').setThumbnail(serverIcon)
            let arrayPerm = newRolePerm.permissions.toArray();
            allPerm.forEach(perm => {
                let fieldvalue = arrayPerm.includes(perm) ? ':white_check_mark:' : ':x:';
                embed.addField(perm, fieldvalue, true);
            });
            embed.setFooter('ChitoPanBOT#4390 • +rolinfo para ver los permisos');
            embed.setTimestamp();
            msg.channel.send(embed);
        })
        .catch(err => {
            console.log(err);
            msg.reply('Error al actualizar el permiso');
        });
    }
}
