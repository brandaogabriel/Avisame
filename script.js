const scrapIt = require("scrape-it");
const nodemailer = require("nodemailer");

//E-mails que receberão os avisos
const emails =
  [];

//Criação do serviço e usuario que enviará o e-mail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "teste@exemplo.com.br",
    pass: "123"
  }
});

//E-mail de boas-vindas.
const boasVindas = {
  from: "[LOAC] - AVISO teste@exemplo.com.br",
  to: "",
  subject: "✅ [LOAC] - E-MAIL CADASTRADO",
  text: 'Você está recebendo esse e-mail porque ele foi cadastrado em uma lista para receber avisos sobre alteração no arquivo de centavos de loac. O próximo e-mail que você receberá é um exemplo real de como chegará o aviso.'
}

//Configurações do corpo do e-mail/mensagem
const mailOptions = {
  from: " 🤖 CENTAVOS CHEGANDO 🤖 teste@exemplo.com.br",
  to: "",
  subject: "🔴 [LOAC] - NOTAS ATUALIZADAS",
  text: 'Atenção, a pagina de notas acaba de ser atualizada! \n http://lad.dsc.ufcg.edu.br/loac/uploads/OAC/anon.txt'
}

function emailCadastrado() {
  transporter.sendMail(boasVindas, function (err, info) {
    if (err) console.log(err);
    else console.log('Email sent: ' + info.response);
  });
}

emailCadastrado();


let tamanhoArquivoLocal = -1;
let tamanhoAtualSite = 0;
let atividades = [];

setInterval(function () {
  scrapIt('http://lad.dsc.ufcg.edu.br/loac/uploads/OAC/anon.txt').then(page => {
    atividades = page.body.split('\n'); //Obtem todos os dados do anon.txt
    tamanhoAtualSite = atividades.length; //Tamanho da atividade

    if (tamanhoArquivoLocal !== tamanhoAtualSite) {
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('Email sent: ' + info.response);
        }
      });

      tamanhoArquivoLocal = tamanhoAtualSite; // Atualizando para o novo valor

    }
    
  }).catch(err => console.log(err));
}, 10000);
