const Discord = require('discord.js');

var request = require('request');
var cheerio = require('cheerio');

function getStatData(location , $){
    var selector = $('.segment-stats .value').eq(location).text();
    var stat_array = $.parseHTML(selector);
    var stat = 0;

    if(stat_array == null || stat_array.lengh == 0){
        return -1;
    }else{
        stat = stat_array[0].data;
    }

    return stat;
}

module.exports = {
    name: 'csgo',
    description: 'Info sobre tu cuenta de cs o csgo',
    execute(msg, args) {
    var UR_L = "https://tracker.gg/csgo/profile/steam/" + args[0] + "/overview";

    if(!args[0]){
        return msg.channel.send("<:x:831731724420775987> | Ingrese un **STEAMID64** válido o ve a https://steamid.io/ para conseguirlo");
    }

    request(UR_L, function(err, resp, body){
        $ = cheerio.load(body);

        var KD = getStatData(0, $);
        if(KD == -1){
            return msg.channel.send("<:x:831731724420775987> | No válido, asegúrese de que su perfil **no sea privado** y de que haya introducido un **STEAMID64** válido! | https://steamid.io/");
        }

        var KILLS = getStatData(1, $);
        var WIN = getStatData(2, $);
        var MVP = getStatData(3, $);
        var HS = getStatData(4, $);
        var DEATHS = getStatData(5, $);
        var SCORE = getStatData(8, $);
        var MONEY = getStatData(9, $);
        var BS = getStatData(12, $);
        var BD = getStatData(13, $);
        var HR = getStatData(14, $);

        var embed = new Discord.MessageEmbed()
            .setTitle("__**Estadísticas del Jugador de CSGO**__")
            .setURL(UR_L)
            .addField("Estadísticas actuales",
            "📌 ⤜ Total de KD: " + "__**" + KD + "**__" + "\n" +
            "🧮 ⤜ Porcentaje de ganancias totales: " + "__**" + WIN + "**__" + "\n" +
            "🔫 ⤜ MVPs: " + "__**" + MVP + "**__" + "\n" +
            "📊 ⤜ Puntaje total: " + "__**" + SCORE + "**__" + "\n" +
            "📂 ⤜ Asesinatos: " + "__**" + KILLS + "**__" + "\n" +
            "📜 ⤜ Muertes: " + "__**" + DEATHS + "**__" + "\n" +
            "💣 ⤜ Bombas plantadas: " + "__**" + BS + "**__" + "\n" +
            "🧨 ⤜ Bombas desactivadas: " + "__**" + BD + "**__" + "\n" +
            "📍 ⤜ Tiros a la cabeza: " + "__**" + HS + "**__" + "\n" +
            "💰 ⤜ Dinero ganado: " + "__**" + MONEY + "**__" + "\n" +
            "📉 ⤜ Rehenes rescatados: " + "__**" + HR + "**__")
            embed.setFooter('ChitoPanBOT#4390', "https://cdn.discordapp.com/attachments/795478872597594164/833157862825787412/91ed566974e33b4bd8d7506861b3d5de.jpg");
            embed.setTimestamp();
            embed.setColor("RANDOM");

        msg.channel.send(embed);
    })
}
}
