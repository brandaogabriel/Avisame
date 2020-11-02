# ⚠️ Avisa-me

<p> 1. Simples aplicação que foi criada durante o RAE (2020.3) para avisar via e-mail quando o arquivo anon.txt, do site de LOAC é atualizado. </p>

<p> 2. As informações utilizadas foram obtidas a partir da aplicação e conceitos de Web Scraping. </p><br>

## Dependências utilizadas:
>scrape-it & nodemailer

**Para rodar o script é necessário ter o **nodejs** e o **npm** instalado na máquina. <br><br>**

## Configurações básicas:
<p> 1. É necessário informar um e-mail e senha válido para a constante transporter no script.js</p>
<p> 2. Determine os e-mails que irão receber as mensagens na constante e-mails.</p>
<p> 3. A constante boasVindas é opcional. </p>
<p> 4. Configure a constante mailOptions com o remetente, a lista de emails, o assunto e a mensagem desejada.</p>
<p> 5. O setInterval é responsável por verificar a cada 10 segundos se o arquivo anon.text foi alterado. A verificação se da a partir do tamanho de linhas do arquivo. </p>
<p>6. Você pode utilizar outras urls para outros fins. Basta alterar o campo da url. Para mais informações sugiro ler a documentação do scrape-it.</p> <br>

## Exemplo de Execução
<p> Com o nodejs e o npm instalados execute: </p>

```
gabriel@FreeMan:~/avisame npm install 
gabriel@FreeMan:~/avisame node script.js
```

* npm install -> instala as depedências (scrape-it e nodemailer).
* node script.js -> executa o script.  