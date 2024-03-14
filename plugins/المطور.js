function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator);
  const contacts = data.map(([id, name]) => [id, name]);

  const text = "*⚘اهلا و سهلا بك يا 『』*\n\n"
             + "*↯رقم المطور:『 [رابط رقم المطور](https://wa.me/message/RYOUR2E5SRFOL1) 』*\n\n"
             + "*↯انستا المطور:『 [رابط انستا المطور](https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3) 』*";
  this.sendMessage(m.chat, text, MessageType.text);

  const imageUrl = "https://telegra.ph/file/f416b40e7f5e312d80edb.jpg";
  const imageCaption = "صورة المطور";
  this.sendImage(m.chat, imageUrl, imageCaption, m);

  this.sendContact(m.chat, contacts, m);
}

function sendMessageToContact(contactId, message) {
  this.sendMessage(contactId, message);
}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'مطور', 'المطور', 'المالك'] 

export default handler
