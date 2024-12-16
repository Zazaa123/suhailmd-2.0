const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09125157852";




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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_02_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1LFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvbzRoOGFXU05FT1dYcEQySzJycG5SRlFlbS9DYjhEQzYwUHhyYlVZNFBNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjUxNTc4NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQxM0ZGNjUwMkNGQ0YzN0NERjE2OTkxRTgwQzMxRjkyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDM3OTM0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0T2toTDNpNlRxeU9LYlZ4ekZiaGxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhlMzQzMzgyLTBhMjItNDg0My05YWEyLTdmNWRhMzZmZWJhZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAyMDksXG4gICAgICAyMDcsXG4gICAgICAyMjcsXG4gICAgICAxMDQsXG4gICAgICAxNTksXG4gICAgICAxNjIsXG4gICAgICAzNyxcbiAgICAgIDIzNyxcbiAgICAgIDEyMixcbiAgICAgIDI0MSxcbiAgICAgIDE3MCxcbiAgICAgIDE5NCxcbiAgICAgIDEyLFxuICAgICAgMTMsXG4gICAgICAxMzMsXG4gICAgICAxNzcsXG4gICAgICA0NSxcbiAgICAgIDExLFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMjI1LFxuICAgICAgMjAsXG4gICAgICAyNDcsXG4gICAgICAyMDQsXG4gICAgICAyMjAsXG4gICAgICA0NyxcbiAgICAgIDExLFxuICAgICAgMTEyLFxuICAgICAgNTcsXG4gICAgICA4MSxcbiAgICAgIDQzLFxuICAgICAgMzcsXG4gICAgICAxODAsXG4gICAgICAxNzMsXG4gICAgICAxNTEsXG4gICAgICAxNTcsXG4gICAgICAxNjUsXG4gICAgICAxNTcsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFVEEyNkM1NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyNTE1Nzg1MjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjAxNTU2ODEwNTQ4MjY6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEwvcW9jR0VNYU9ncnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBYXZqMEVncDVFWUNPdFB0OTNxOUF6L0p3eVdIYmdCZktjVUVPSi82a2trPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJyTzZnVlhzRHhaYWFMQ0s2L2lnSzFaeUgxVFBRNHJLd2JyUHJQNGh4N3pxYlNzM2xpZGJ1MzM2R002YXNMNDl3QThub3NBckJDVEcyK3dxNmJRZkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInE3T204eFA1czJIdnZ6eDVUS1BwWnMzallTazlrN2FOQlJsN21kSTJmaVlpeU5qbkRJNHlieVB6ZUlXNFd0ODJERWd4S1lYUlkrZDI5ZFhsZURiQ2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjUxNTc4NTI6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0Mzc5MzM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmFlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGYWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoUmZCcURCSG1pMHR6a3dBUHVKczdDQWpnbmx4S1lEblVpczdCS3dMc2dBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MjU5OTcyOTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
