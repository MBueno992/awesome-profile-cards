const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');

//crear conexión con los datos de freeDb
async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  connection.connect();
  return connection;
}

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//Pinta los proyectos
// server.get('/projects', async (req, res) => {
//   const connect = await getConnection();
//   const sql =
//     'SELECT * FROM authors, projects WHERE authors.idAuthor = projects.fk_idAuthors';
//   const [results] = await connect.query(sql);
//   connect.end();
//   res.json({ success: true, data: results });
// });

//Crear tarjeta
server.post('/createCard', async (req, res) => {
  const connect = await getConnection();
  const insertNewCard =
    'INSERT INTO profileCards (name, job, photo, email, phone, linkedin, github, palette) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const [resultsNewCard] = await connect.query(insertNewCard, [
    req.body.name,
    req.body.job,
    req.body.photo,
    req.body.email,
    req.body.phone,
    req.body.linkedin,
    req.body.github,
    req.body.palette,
  ]);
  connect.end();
  res.json({
    success: true,
    cardURL: `https://awesome-profile-cards.vercel.app/detail/${resultsNewCard.insertId}`,
  });
});

//Tarjeta nuevo enlace

server.get('/detail/:idCard', async (req, res) => {
  console.log(req.params);
  const { idCard } = req.params;
  const connect = await getConnection();
  const selectCard = 'SELECT * FROM profileCards WHERE idCard = ?';
  const [resultCard] = await connect.query(selectCard, [idCard]);
  {
  }
  res.render('detail', { card: resultCard[0] });
});

//Servidores estáticos
const statictServer = './web/docs';
server.use(express.static(statictServer));

const staticImage = './src/images';
server.use(express.static(staticImage));

const staticStyle = './src/public-css';
server.use(express.static(staticStyle));
