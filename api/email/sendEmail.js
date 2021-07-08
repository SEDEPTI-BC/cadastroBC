const fs = require("fs");
const nodemailer = require("nodemailer");

const mailer = async function(emailAddress, files) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "sedepti.devs@gmail.com",
      pass: "suporte@sedepti",
    },
  });

  var attachmentsObject = {};

  const attachmentFiles = files.map(fileName => {
    return {
      filename: fileName,
      path: "../../uploads/" + fileName
    };
  });

  // send mail with defined transport object
  const info = await transporter.sendMail(
    {
      from: '"SEDEPTI" <sedepti.devs@gmail.com>', // sender address
      to: emailAddress, // list of receivers
      subject: "Ficha catalográfica - FICAT", // Subject line
      text: "Olá! Segue em anexo uma cópia da ficha catalográfica requisitada!", // plain text body
      // html: '<b>Hello world?</b>', // html body
      attachments: [
        {
          filename: fileName,
          path: fileStream,
        },
      ],
    },
    (err, info) => {
      if (err) {
        console.log(err);
      }
      // else {
      //   console.log(info)
      // }
      fs.unlink("../../uploads/pdf_location/ficha.pdf", (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("cleared");
        }
      });
    }
  );
};

module.exports = mailer;
