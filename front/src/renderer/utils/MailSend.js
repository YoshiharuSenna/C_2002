const NodeMailer = require('nodemailer')

function sendMail (smtpData, mailData) {
  console.log(mailData)
  // SMTPサーバの情報をまとめる
  const transporter = NodeMailer.createTransport({
    host: smtpData.host,
    port: smtpData.port,
    secure: smtpData.secure, // SSL
    auth: {
      user: smtpData.auth['user'],
      pass: smtpData.auth['pass']
    }
  })

  // メール送信
  transporter.sendMail(mailData, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

export default { sendMail }
