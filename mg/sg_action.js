var ran = Math.round(Math.random() * 1000 * Math.random() * 10).toString();
var skins_json = "{\n\t\"skins\": [\n\t\t{\n\t\t\t\"localization_name\": \"skin" + ran +
                 "\",\n\t\t\t\"type\": \"free\",\n\t\t\t\"geometry\": \"geometry.humanoid.custom\"," +
                 "\n\t\t\t\"texture\": \"skin.png\"\n\t\t}\n\t],\n\t\"localization_name\": \"main" +
                 ran + "\",\n\t\"serialize_name\": \"main" + ran + "\"\n}\n";
var en_US_lang = "skinpack.main" + ran + "=" + get_from_url_query_param("sp_name") +
                 "\nskin.main" + ran + ".skin" + ran + "=" + get_from_url_query_param("s_name") + "\n";
console.log("skins.json\n");
console.log(skins_json);
console.log();
console.log("en_US.lang\n");
console.log(en_US_lang);