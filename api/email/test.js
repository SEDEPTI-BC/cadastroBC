const fs = require("fs");
const handlebars = require("handlebars");

const readHTMLFile = function(path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function(err, html) {
    if (err) {
      throw err;
    } else {
      callback(null, html);
    }
  });
};

readHTMLFile(__dirname + "/email_template.html", function(err, html) {
  const template = handlebars.compile(html);
  const replacements = {
    user_name: "John Doe",
    socialName: "John Does",
    user_email: "johndoe@email.com",
    address: "trav. lomas valentias",
    contact: "9122334455",
    date: "22/06/1996",
    cpf: "02178957650",
    nationality: "Brasileiro",
    sex: "Masculino",
    doc: "7881423",
    deficiency: "Nenhuma",
  };
  const htmlToSend = template(replacements);
  console.log(htmlToSend);
});
