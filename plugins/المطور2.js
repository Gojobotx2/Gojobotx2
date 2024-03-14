const { MessageType } = require('@adiwajshing/baileys');

const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    const taguser = "taguser";
    const caption = `
*⚘اهلا و سهلا بك يا 『${taguser}』*

*↯رقم المطور:『 https://wa.me/message/RYOUR2E5SRFOL1 』*

*↯انستا المطور:『 https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3 』*
`.trim();
    const imageUrl = 'https://telegra.ph/file/f416b40e7f5e312d80edb.jpg';

    // Fetch the image and send it
    const imageBuffer = await conn.downloadAndSaveMedia(imageUrl);
    conn.sendMessage(m.chat, imageBuffer, MessageType.image, { caption: caption });

  } catch (error) {
    console.error(error);
  }
};

handler.help = ['.المطور'];
handler.tags = ['infobot'];
handler.command = ['معلومات'];
handler.register = false;

export default handler;
