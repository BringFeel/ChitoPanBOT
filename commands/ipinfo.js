const Discord = require('discord.js');

var request = require('request');
var cheerio = require('cheerio');
module.exports = {
    name: 'ipinfo',
    description: 'Info sobre una ip',
    execute(msg, args) {
    var UR_L = "http://ipinfo.io/" + args[0] + "?token=35d7be873cfceb";

    if(!args[0]){
        return msg.channel.send("Ingresa una ip valida...");
    }

        var ip = get(ip, );
        var anycast = get(anycast, );
        var city = get(city, );
        var region = get(region, );
        var country = get(country, );
        var loc = get(loc, );
        var org = get(org, );
        var postal = get(postal, );
        var timezone = get(timezone, );

        var embed = new Discord.MessageEmbed()
            .setTitle("__**Información de la ip:**__")
            .setURL(UR_L)
            .addField("Estadísticas actuales",
            "🌐 ⤜ Ip: " + "__**" + ip + "**__" + "\n" +
            "🌐 ⤜ Anycast: " + "__**" + anycast + "**__" + "\n" +
            "🌐 ⤜ Ciudad: " + "__**" + city + "**__" + "\n" +
            "🌐 ⤜ Región: " + "__**" + region + "**__" + "\n" +
            "🌐 ⤜ País: " + "__**" + country + "**__" + "\n" +
            "🌐 ⤜ Loc: " + "__**" + loc + "**__" + "\n" +
            "🌐 ⤜ Org: " + "__**" + org + "**__" + "\n" +
            "🌐 ⤜ Postal: " + "__**" + postal + "**__" + "\n" +
            "🌐 ⤜ Zona horaria: " + "__**" + timezone + "**__" + "\n")
            embed.setFooter('ChitoPanBOT#4390', "https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg");
            embed.setTimestamp();
            embed.setColor("RANDOM");

        msg.channel.send(embed);
    }
}
