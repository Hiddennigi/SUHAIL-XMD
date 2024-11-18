const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_08_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICA1NixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMStySVA2am9tVkU2dHRWN3pmK1JuZ1czQUpqaDhUS0o3d1lEcTlrTHgwMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ1pVV0RNOVVUOWU0RTR6ZWZ1NWEzZ1wiLFxuICBcInBob25lSWRcIjogXCI2OTM5MzliNy1mYTVmLTQ1MGItYTYxYS02YmE5M2JiNmE4YjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDE0MixcbiAgICAgIDE5NixcbiAgICAgIDIzOSxcbiAgICAgIDE0MSxcbiAgICAgIDExNixcbiAgICAgIDIzOSxcbiAgICAgIDIzLFxuICAgICAgMTQsXG4gICAgICAyNDksXG4gICAgICAyMDMsXG4gICAgICAxLFxuICAgICAgMzMsXG4gICAgICA2MCxcbiAgICAgIDE0OCxcbiAgICAgIDEyMixcbiAgICAgIDk1LFxuICAgICAgMjIwLFxuICAgICAgMjEzLFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMjAzLFxuICAgICAgODIsXG4gICAgICAxMjIsXG4gICAgICAxNjAsXG4gICAgICAyMTQsXG4gICAgICA1NyxcbiAgICAgIDMsXG4gICAgICAxNTUsXG4gICAgICA5MyxcbiAgICAgIDE0OSxcbiAgICAgIDU0LFxuICAgICAgNjUsXG4gICAgICAyNixcbiAgICAgIDE1NCxcbiAgICAgIDEyMyxcbiAgICAgIDIxNixcbiAgICAgIDIwNCxcbiAgICAgIDQ4LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzJORDlHOFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjI0NzQ0NzM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMw7huZXJcIixcbiAgICBcImxpZFwiOiBcIjEyNjcyMzQxMjczODExMzoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLM0l6SndDRU9UazVya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJCRTlhZm1FTHJBN1RJS3NqUnc4eVNvUUo3dmxKVTJSQ1RvRjZpUzNLSE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibFVZS3JGNCtkREZoOFlJcmNOM2VYTFo5cnZPMDR5VmdnM3kvYXVGYnZBektZcWE4U1ovaWtZWjhBVkN6eDRMVmVEblF0SzVpWnhSelBza2g3UWlWQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN2JkenZVVWJhUWpRUGF5SXpHMUhCZ1dJMnVnbHJORi9tTTBZaVpkZlFEcU5Yb3Q4ODFRK01JMEhmQnVXaVpCZExFNlR2YWtMTDRudFE2bzVQOTZzREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2MjQ3NDQ3MzoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODM0NDcyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
