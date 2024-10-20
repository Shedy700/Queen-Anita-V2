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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURyRVhacWVrMzlOL29GTEV1aCtrN1pLaldBSk9XenM1TXBrdHZXa09Vdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM056eVdpamxkRkZ1RDlpc1REalRVOERJUXV5aEw0TXkxeFBOM0tueldYWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQk5TcWp5ZTlYdEZkaVBhRm4rOG0weVY3bmRjYVJWb1RUaUxXbTlBZGtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQU5rVHRYTkYzZWpsTE41YUJaWDBGWFI1bWppY256TXJLbmxEcUg0STBNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBb3g2K0FvQTM2SkxGQUhCT3liVFVjNzJyMjczSThObU1SNEs2OEN4MW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBSYnUwRXBnQ0VmWTViS1Y4MHBSZSszVGk5SkcwdUFQVEJWaVZCMHZKM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZlWlpaVUdFaURTejQzdUk0bmNBQVFabEpQZXN0Yi9HVlVVNTYyZ2VHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01XQkJYUWUvRlpDV0NzVU1aQ0g3bjNVUGlINWxzOHh4dDZicGpXT3h6cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9la2UzRG9rNVhoR0lqTXI1VDhzZisyZjZmODRFWnQ1YUxiNTU4OGlycjlsVU9RMlkwQUplbTZtN1VJTmdDcmlRUGxmNnJGZzJURUsvU1ViMm5uMWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6Iml2Wlp6TmtYK1NFQUV2QUIzaVNVNnhkSFd3QzNTYzRJWW13SDRhK3FtWFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5WOU9XMjBjUkJPN0RzN0VRVGpwd3ciLCJwaG9uZUlkIjoiMDRmOGI5OGMtMTQ3Yy00ZmIwLWFmNGYtZjIyZTY4MGNkMWZjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMeGh0RmllWWwwQUIvcURFQVRJSC8yb1RZaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEaEdUM3V0SHNIUVdQNWxNYi9QQWkzL0xoVkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjhWTUhCMVYiLCJtZSI6eyJpZCI6IjI1NTc0NTc3ODA3MjoxOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2VwN0ZVUTRmdlN1QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR3k2emhhK2dqRU1jV0ZRRVIvVm14cVE3cEFUSHpCSkd6QjVXR2ZqdlNsQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT1pxeHJPdVNEL0N5THI0ekN5ZE9yR0ZWVWRWWFZSUGFoNllNRTloU05yWFViL3FFaWtPdlpMcDlvRHJuYUhnQmloWkl6N0VCbnc2WW9vS1FVcXU2Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6Iks5bmZzdWQwOTR3dlJiTXErYUNPT3JSRzFsU05SdUZwaDVFZCtMTXRKSjV5RW5EWUYrWW8waVlyQzhNdWNsT3R2WGxmZVRjaEpJN2V5SWU1RkljT2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzQ1Nzc4MDcyOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJzdXM0V3ZvSXhESEZoVUJFZjFac2FrTzZRRXg4d1NSc3dlVmhuNDcwcFEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk0MTI1OTB9"
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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
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
