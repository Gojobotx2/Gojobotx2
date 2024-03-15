const { MessageType } = require('@adiwajshing/baileys');

const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    const taguser = "taguser";
    const caption = `
*⚘اهلا و سهلا بك يا 『${taguser}』*

*↯رقم المطور:『 https://wa.me/message/RYOUR2E5SRFOL1 』*

*↯انستا المطور:『 https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3 』*
`.trim();
    thumbnailUrl:'https://telegra.ph/file/f416b40e7f5e312d80edb.jpg';

  } catch (error) {
    console.error(error);
  }
};

handler.help = ['.المطور'];
handler.tags = ['infobot'];
handler.command = ['المطور'];
handler.register = false;

export default handler;
