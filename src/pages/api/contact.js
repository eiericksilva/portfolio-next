import nodemailer from "nodemailer";
import { google } from "googleapis";

const { OAuth2 } = google.auth;

const email = process.env.MAILADDRESS;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;
const OAuth2_client = new OAuth2(clientId, clientSecret);

OAuth2_client.setCredentials({
  refresh_token: refreshToken,
});

const accessToken = OAuth2_client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken,
  },
});

const mailer = ({ senderMail, name, phone_number }) => {
  const from = `${name} <${senderMail}>`;
  const message = {
    from,
    to: `${email}`,
    subject: `NOVO PEDIDO DE ORÇAMENTO - ${name}`,
    text: `Erick, ${name} enviou este email para que você entre em contato com ele(a) pelo número ${phone_number}`,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

const sendFormData = async (req, res) => {
  const { senderMail, name, phone_number } = req.body;

  if (senderMail === "" || name === "" || phone_number === "") {
    res.status(403).send("todos os campos são obrigatórios");
    return;
  }

  const mailerRes = await mailer({ senderMail, name, phone_number });
  res.send(mailerRes);
};

export default sendFormData;
