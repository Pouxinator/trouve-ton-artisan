const { Op } = require("sequelize");
const nodemailer = require("nodemailer");
const { Artisan, Specialty, Category } = require("../models");

exports.getAllArtisans = async (req, res) => {
  try {
    const { search, category } = req.query;

    const whereArtisan = {};

    if (search) {
      whereArtisan.name = {
        [Op.like]: `%${search}%`,
      };
    }

    const artisans = await Artisan.findAll({
      where: whereArtisan,

      include: {
        model: Specialty,
        required: true,

        include: {
          model: Category,
          required: true,
          ...(category && {
            where: {
              name: category,
            },
          }),
        },
      },

      order: [["name", "ASC"]],
    });

    res.json(artisans);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { is_top: true },
      include: {
        model: Specialty,
        include: Category,
      },
      order: [["note", "DESC"]],
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: {
        model: Specialty,
        include: Category,
      },
    });

    if (!artisan) {
      return res.status(404).json({ message: "Artisan non trouvé." });
    }

    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.contactArtisan = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires.",
      });
    }

    const artisan = await Artisan.findByPk(id);

    if (!artisan) {
      return res.status(404).json({
        message: "Artisan non trouvé.",
      });
    }

    if (!artisan.email) {
      return res.status(400).json({
        message: "Cet artisan ne possède pas d'adresse email.",
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
Nouveau message envoyé depuis Trouve ton artisan.

Artisan : ${artisan.name}

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