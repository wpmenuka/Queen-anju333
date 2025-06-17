//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hRQzJIZUtLYUpmYVlFQmtjdTV5SWdqMXB4LzdKeGdCNldidkpDbFdIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmFHSXZqWG4vUXpjSjBtdlFGU2h5NjNhL2prZUpsMzhjNzdlUkkxQ00wYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS0FIZmZoQmpnQjQ3dXVPbzV5Zjd2YVVKblo1cndsTksreFZqV3dmTzI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrdXlzK3NzNEhnKy8zWDFKUjNZMXdLUzRmZkszQUt3aFdNQWZRQzFMaWw4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJZ1JlR3Qyb2tKdW8rNUFFL2NOZzBQRFNKeFJtZDAwWVdWSkhZNGh3SEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZLeURGZmZpVVBXZi9pb1RrQXlwVG43R0h1c29FQkQyOFFsbHo3Sm04bE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5ZM211NEZtUHgxS0lSckRiKzkxRWpxVy9WdklKdTFsMWozMklDdlduQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTk9wT0JyZ1AwQXhwWWdHbVcvZWpKcFZYYlVwMEdnZVpBemcyaTZtRDRFcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAwQmRCVmlRcEdXSzRWZ1dKNGF1SXk1ZjhCdzgyekhlanl3WVFIcTFSQVRUaDFjY09xd1NPVFAwQURGTHRVU1hhWjJMc0ZQcmo1VTVSMHZEZWN6VEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJVbEQ5TmFqL2pkZ1gydzh1TFBpd0grbUxqTy9YQ3FnODQyQXR6RFFTa2tnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCOUROSjYwVFJObWVmYkQ3djNYelB3IiwicGhvbmVJZCI6Ijg0OWQ1YjE1LWM1NmItNGE0Ni1hZDY0LTJlZjMzMjAxOTUyNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUXRRM095SDlBMGhRVkVZTVpCUG9STnEzN2s9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF5Y2FzZDVNdW4wazlpQ2xGeVhiZkxPSkpnMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09UNnVjRUNFTm13eGNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpoV2wrNGorUWVvMUQ5YTFaVUcwV0d1RUh3RityL250bVh0VjBsc3dDMzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRWRStSb2ZZQ3E0akVyZElOK090MUI4RnFjWjJXdU1USlFLMFU5SDVzaFpaQ0ZmdGlYanM3ZEZqNHo0ZlV4RHNFakFSaVZ5NDVrSWc4TFVKdnc2UEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsd0tDMlhpUnk4NEoyRjZCOGpta1Y2am5HRTU4ZDJtZktZYXRsU0N2dkh5WWRENHZZdi9MSmhJZHVmb041c0pMRDlXZlNoOENpaWxjdW9iWTNvcmZDZz09In0sIm1lIjp7ImlkIjoiOTQ3NTQ2MjAwNzk6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxNzA1NTM0OTQ0MDcyMjoyQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NDYyMDA3OToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNZVnBmdUkva0hxTlEvV3RXVkJ0RmhyaEI4QmZxLzU3Wmw3VmRKYk1BdC8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lBdz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDE2MTUwMCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU8zTiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94754620079",
  PASSWORD: 
    process.env.PASSWORD || "Menuka123#@#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94741321391", "94768504703","94755616554", "94762862143","94729224013","94771273552","94787437303","94761731783","94762695098"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
