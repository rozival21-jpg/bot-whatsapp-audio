import qrcode from "qrcode-terminal";
import pkg from "whatsapp-web.js";

const { Client } = pkg;

const client = new Client();

client.on("qr", (qr) => {
  console.log("QR RECEBIDO, ESCANEIE:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Bot conectado!");
});

client.on("message", (message) => {
  if (message.body === "oi") {
    message.reply("Olá! 👋");
  }
});

client.initialize();
