const nodemailer = require("nodemailer");
const { Artisan } = require("../models");

exports.sendMessage = async (req, res) => {
  try {
    const { artisanId, name, email, subject, message } = req.body;

    if (!artisanId || !name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires.",
      });
    }

    const artisan = await Artisan.findByPk(artisanId);

    if (!artisan) {
      return res.status(404).json({
        message: "Artisan non trouvé.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Trouve ton artisan" <${process.env.SMTP_USER}>`,
      to: artisan.email,
      replyTo: email,
      subject: `[Trouve ton artisan] ${subject}`,
      text: `
Nouveau message depuis Trouve ton artisan.

Artisan contacté : ${artisan.name}

Nom : ${name}
Email : ${email}
Objet : ${subject}

Message :
${message}
      `,
    });

    res.status(200).json({
      message: "Message envoyé avec succès.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de l'envoi du message.",
    });
  }
};