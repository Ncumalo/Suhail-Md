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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "686556345";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_49_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYzLFxuICAgICAgICA3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieW5BcnVRaDBGUFlxNDBkVmNFT3lBWFFaSTc4L3JNYXRjOXVmMU1rNWtwMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzY4NjU1NjM0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUMxNDk2NDkzNDYwNUM4NkI3Q0MxNThEOTZFMEE3MzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDk0MTczXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc2ODY1NTYzNDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMwODVBOEVFNzQ1RjYzNDVFOTdCRDQ3REEzQjMxNzM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ5NDE3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEa3k3b3BUQlJ2S2xlb2hVcVpoNklnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2YmRmZDFjLTcxMzYtNDM3Yi1iN2Y4LTk0NTExNDFiZWUyN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDUwLFxuICAgICAgODgsXG4gICAgICA3MyxcbiAgICAgIDY3LFxuICAgICAgMzgsXG4gICAgICAyMDksXG4gICAgICA2LFxuICAgICAgNDIsXG4gICAgICAwLFxuICAgICAgNDksXG4gICAgICAxNzQsXG4gICAgICA1LFxuICAgICAgMTMxLFxuICAgICAgODMsXG4gICAgICAxNTgsXG4gICAgICAyMTQsXG4gICAgICAyMDgsXG4gICAgICAyNDUsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDc5LFxuICAgICAgODYsXG4gICAgICAxODgsXG4gICAgICAxNixcbiAgICAgIDIxNyxcbiAgICAgIDE4NyxcbiAgICAgIDYyLFxuICAgICAgMTAsXG4gICAgICAxMzUsXG4gICAgICAxOTQsXG4gICAgICA0NyxcbiAgICAgIDIzOSxcbiAgICAgIDY3LFxuICAgICAgMTQyLFxuICAgICAgNDYsXG4gICAgICAxOTgsXG4gICAgICAyMTMsXG4gICAgICA1NyxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0txdzNEQVFrdFh2dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWHMwS3laT3F2QUJ6a0FxNk1XUmhuR2d2YWlYeUpmbTRZMUZTY05Ba1Jocz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpNVZTZy9tZVJQU0JUSVFmc3EydGdlLzZFR0NsMFlxd0N6c056MURYLzlUMFhmeG9sN1owdi9NTnBsS212ejFtQmpnU3JtSExwZHNwd24ya0ZwdXBCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1WHl2SnBSVit2U1dja3doRW5MUEM0MkZ0UWpsWldQUWNrRGRMQ0tlV2V1MHBWdXd2ZXZPODlLdVprVnhCZE95TVBNeHgzeDljZ2o0M2tybURaVGNpQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3Njg2NTU2MzQ1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOeCBIb2xkaW5nc1wiLFxuICAgIFwibGlkXCI6IFwiMjA0NTI2ODI5MTk1NDA1OjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY4NjU1NjM0NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0OTQxNjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFINnhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg2eC5qc29uIjogIntcImtleURhdGFcIjpcIkxiR1dPUzFoVGNxaldyNVlvaFdCTVhCN3N4Q21tNjIvTm9NQUNCZUs4T1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyMTc2ODEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0OTQxNzA4MDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "blackberry",
  packname: process.env.PACK_NAME || "blackberry",
  botname : process.env.BOT_NAME  || "blackberry bot",
  ownername:process.env.OWNER_NAME|| "blackberry",


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
  //readmessage:process.env.READ_MESSAGE|| "true",
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
