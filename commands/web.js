module.exports = {
    name: 'web',
    description: '[Web](https://www.cobel-motion.xyz/FranBOT.html) oficial de FranBOT. (beta)',
    execute(msg, args) {
        msg.channel.send({embed: {
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
};