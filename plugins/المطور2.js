const { MessageType } = require('@adiwajshing/baileys');

const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    const taguser = "taguser";
    const caption = `
*⚘اهلا و سهلا بك يا 『${taguser}』*

*↯رقم المطور:『 https://wa.me/message/RYOUR2E5SRFOL1 』*

*↯انستا المطور:『 https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3 』*
`.trim();

    // إضافة رابط الصورة كصورة مرفقة مع الرسالة
    const messageOptions = {
      quotedImage: 'https://telegra.ph/file/f416b40e7f5e312d80edb.jpg'
    };

    // إرسال الرسالة مع الصورة المرفقة
    await conn.sendMessage(m.chat, caption, MessageType.text, messageOptions);

  } catch (error) {
    console.error(error);
  }
};

handler.help = ['.المطور'];
handler.tags = ['infobot'];
handler.command = ['المطور'];
handler.register = false;

export default handler;
