const fs = require("fs");
const nodemailer = require("nodemailer");

const mailer = async function(emailAddress, files) {
  // create reusable transporter object using the default SMTP transport

  console.log("creating transporter...");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "sedepti.devs@gmail.com",
      pass: "suporte@sedepti",
    },
  });

  // let attachmentsObject = {};

  const attachments = files.map((fileName) => {
    return {
      filename: fileName,
      path: "uploads/" + fileName,
    };
  });

  // send mail with defined transport object
  const info = await transporter.sendMail(
    {
      from: '"SEDEPTI" <sedepti.devs@gmail.com>', // sender address
      to: emailAddress, // list of receivers
      subject: "Cadastro BC - TEST", // Subject line
      text: "Olá! Segue em anexo varios arquivos heh", // plain text body
      // html: '<b>Hello world?</b>', // html body
      attachments: attachments,
    },
    (err, info) => {
      if (err) {
        console.log(err);
      }
      // else {
      //   console.log(info)
      // }

      files.forEach((file) => {
        fs.unlink(`uploads/${file}`, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("cleared");
          }
        });
      });
    }
  );
};

module.exports = mailer;
