const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_57_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNixcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgODYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY2LFxuICAgICAgICA4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM3LFxuICAgICAgICA0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU1LFxuICAgICAgICAyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLWHI0ZVA1MHl2MWhoc3hDdk96VUFLRG1Yc0srb2xidjJOd29kaTZvWGlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRWWp5SUl0WlJFcTVrajFoUEN2YXdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImIzZGQ4MzczLTYxNDgtNGFiMi1iOGM3LTNmMDcxZTcyZTI0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDIyMyxcbiAgICAgIDYzLFxuICAgICAgNjEsXG4gICAgICAxNSxcbiAgICAgIDIzNyxcbiAgICAgIDE4MixcbiAgICAgIDIsXG4gICAgICAxNDAsXG4gICAgICAyNDYsXG4gICAgICA3NCxcbiAgICAgIDE5MSxcbiAgICAgIDU2LFxuICAgICAgMTk1LFxuICAgICAgMjEsXG4gICAgICAxODIsXG4gICAgICAxNzksXG4gICAgICAyMDUsXG4gICAgICA1MSxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxMDUsXG4gICAgICAxMDEsXG4gICAgICAyMzIsXG4gICAgICA0NixcbiAgICAgIDE5OSxcbiAgICAgIDIxNyxcbiAgICAgIDE4OSxcbiAgICAgIDE0MCxcbiAgICAgIDI2LFxuICAgICAgMSxcbiAgICAgIDgzLFxuICAgICAgNjksXG4gICAgICAyMDQsXG4gICAgICAxNzgsXG4gICAgICAyMTEsXG4gICAgICAxMDMsXG4gICAgICAzMCxcbiAgICAgIDExMCxcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpaWVYySDlIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM3MDIwOTM1MDk6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJRdXJhdC8vXCIsXG4gICAgXCJsaWRcIjogXCIyMjc1MDQ4MjAzNjc1MTM6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEt2cllJQ0VNR2Z0YlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKVjczRVRvN0dVckhBTEN3R1BCVXhIM0tBMEJ2VWRybXpBTjNOV1liaFFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhCZitVbWNtRVIxcHBzZHhZOHFqSTlzVjJ4VEs4YXJORWFPdXpvcGNZaXZWa1JsaFdaQmlJWHdHQTdZNXI2RGl5L0c4RFIzdjIrOG1DRUwvMU5FV0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjQ3bHZSMzh1MldJRWc2OU0vd1pCaHk4Uk11a3puV0JlUVJ0cjgwSm9xWVd1Ykw2bUZnaEVkM1BYOXZwT2cyQTMxRjYyVVk0UmF2TlN5N01tcUdsbml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzcwMjA5MzUwOToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUzNzAyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZuM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm4zLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaXVVSlJ5R3R5ZVhvWU0xMk5EK0J2WmRxbVdLVFFPMTU2VHNNTDduM0Z4Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NDE4MDg1NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
