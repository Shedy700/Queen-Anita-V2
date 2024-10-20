//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "shedy700@gmail.com";
global.location = "Dar_es_Salaam, Tanzania";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://fafiw99751:x3UXjaV8I8CKoCEB@cluster12977.yzei3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster12977";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar_es_Salaam";
global.github = process.env.GITHUB || "https://github.com/Shedy700";
global.gurl = process.env.GURL || "https://whatsapp.com/IWtFZvkWzn11xQK1zHxZUv";
global.website = process.env.GURL || "https://whatsapp.com/IWtFZvkWzn11xQK1zHxZUv";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://whatsapp.com/IWtFZvkWzn11xQK1zHxZUv";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "255623778072";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01mcWJnc29tMWhaQ3NPTzdqMXJyemFaU1RodlphbEdjZ3VzZXJVb0RGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFArQ3ZRV3c5Vit6VkI1M09KNU51YWRTV2pNRzNGYkU4YXZRdDhmTzZWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRFM0aDZVd1pJSVZKQ2ZWWUVOYzVhS2VSSXRkQlRGM1FFdHRsLzQramxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQkcrUUsveUNEWWJpMTVyQ2hHM3JGbGRXTndxN21KMFFYOU1VWXhMK1djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFdHphbEN3aFI3emM2N2pCdHhIVk5tMmlhK2psdytHQmMzNmdDdGR2RTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ2eHd0VFhPVFBDNjB1QnZlWUpLNzZUdG9vQlVRN3RsMzE3N25UUHZ4aG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV004RTVnTllRY2s5LzlEMW5CWG4xNzVwa2tNeGRlTmZYaDBzMmRrSUZYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lKTWp0VmRXR3R1eFJlRm9NNmZnVTc2VGxudzFxN1lyNUdpUWFuVmt3cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxSVnM4S3lYM3AxUmNLMEZibndRMlBmNXpJaGJQN3F2cHRtUWszeFREZ3JnTFNHekE3WGpCVzVkZ29pNTB4c05DOXdod2hQRTN1cUxiREwrMU5yRkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6ImNyQlhTcm1qQUJxZ2lBT2U1WHdnUTRocTBXcDAxNXJNd2VkMTEwWUdERlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzQ1Nzc4MDcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE2NDM3QzJFMjUwRDc5Qjc5RDdGMEJDQzc3NzNBNzcxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk0MzU5MzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImctYXhkSl9oUm0yc3VVWEdCdzRJdGciLCJwaG9uZUlkIjoiMjE4YTYzZWMtZDY5Zi00Y2Q2LTg5NzEtZDAxZDMzNWY2ZWVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldVWEdKamdNa3BCWTY2eEZwVUQvaGxIMU1iUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRTkvZlp3ZSs2UnhCUW9DV3hqTkd3dnhSckU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUkNMSlBFSkYiLCJtZSI6eyJpZCI6IjI1NTc0NTc3ODA3MjoyMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2lwN0ZVUWk3TFV1QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR3k2emhhK2dqRU1jV0ZRRVIvVm14cVE3cEFUSHpCSkd6QjVXR2ZqdlNsQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaG5kWDhCZTEraHFWaGRlZHQ4b3BOcWJPU2xiN1JzM0p3RlAzODNTdERPbVNoVy8wd3IwYnozU0Qvelhmc29PMmRkeTJqRnpCVlpISXpTOTQxWHErQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1Ob3d3WGhWL09qRUNPZExTSHo4YTd2WlhwSFFqUUxya1A5UmdRZ2xSZndzMzZoYzZTdk45aURmN2E3L2kyQXo5Z2RFSjl6NjF4ZmZ5TmoxckUrTEJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzQ1Nzc4MDcyOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJzdXM0V3ZvSXhESEZoVUJFZjFac2FrTzZRRXg4d1NSc3dlVmhuNDcwcFEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk0MzU5MjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2NWIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`SHEDDYBOT™`",
  author: process.env.PACK_AUTHER || "SHEDDYBOT",
  packname: process.env.PACK_NAME || "S H E D D Y",
  botname: process.env.BOT_NAME || "SHEDDYBOT",
  ownername: process.env.OWNER_NAME || "SHEDDYTZ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Qhh2T4GftAXVQ9herygDJZ7M",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "oWAxZDx7w5VEj9dCyTzz",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "S H E D D Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
