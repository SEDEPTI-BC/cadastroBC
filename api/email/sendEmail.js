require("dotenv").config();
const fs = require("fs");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const handlebars = require("handlebars");

const mailer = async function(emailAddress, files, userData) {

  const readHTMLTemplate = function(path, callback) {
    fs.readFile(path, { encoding: "utf-8" }, function(err, html) {
      if (err) {
        throw err;
      } else {
        callback(null, html);
      }
    });
  };
  
  readHTMLTemplate(__dirname + "/email_template.html", function(err, html) {
    const template = handlebars.compile(html);
    // const replacements = {
    //   user_name: "John Doe",
    //   socialName: "John Does",
    //   user_email: "johndoe@email.com",
    //   address: "trav. lomas valentias",
    //   contact: "9122334455",
    //   date: "22/06/1996",
    //   cpf: "02178957650",
    //   nationality: "Brasileiro",
    //   sex: "Masculino",
    //   doc: "7881423",
    //   deficiency: "Nenhuma",
    // };
    const htmlToSend = template(userData);
    console.log(htmlToSend);
  });

  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  console.log("creating transporter...");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
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
