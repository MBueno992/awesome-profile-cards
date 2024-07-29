import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

//Configuración del servidor
const server = express();
const port = process.env.PORT || 4000;
server.use(express.json({ limit: '25mb' }));
server.use(cors());

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//Crear tarjeta
server.post('/createCard', async (req, res) => {
  try {
    const insertNewCard =
      'INSERT INTO profileCards (name, job, photo, email, phone, linkedin, github, palette) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const [resultsNewCard] = await turso.execute(insertNewCard, [
      req.body.name,
      req.body.job,
      req.body.photo,
      req.body.email,
      req.body.phone,
      req.body.linkedin,
      req.body.github,
      req.body.palette,
    ]);
    console.log(resultsNewCard);
    res.json({
      success: true,
      cardURL: `https://awesome-profile-cards.vercel.app/detail/${resultsNewCard.insertId}`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, result: 'Se ha producido un error' });
  }
});

//Tarjeta nuevo enlace

server.get('/detail/:idCard', async (req, res) => {
  const { idCard } = req.params;
  const selectCard = 'SELECT * FROM profileCards WHERE idCard = ?';
  try {
    const [resultCard] = await turso.execute(selectCard, [idCard]);
    res.render('detail', { card: resultCard[0] });
  } catch (error) {
    res.status(500).json({
      success: false,
      result: 'Se ha producido un error',
    });
  }
});

//Servidores estáticos
const statictServer = './web/docs';
server.use(express.static(statictServer));

const staticImage = './src/images';
server.use(express.static(staticImage));

const staticStyle = './src/public-css';
server.use(express.static(staticStyle));
