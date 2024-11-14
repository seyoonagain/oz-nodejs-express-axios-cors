// server.js

const express = require('express');
const cors = require('cors');
const app = express();
app.use(
  cors({
    origin: '*',
    methods: ['OPTIONS, POST, GET, PUT, DELETE'],
    headers: 'Content-Type',
  })
);

app.use(express.json());
app.use(express.text());

let data = { message: '여러분 화이팅!' };

app.options('/', (req, res) => {
  return res.send('send a request');
});

app.get('/', (req, res) => {
  return res.json(data);
});

app.put('/', (req, res) => {
  data.message = req.body;
  res.status(200).send(`받은 POST 데이터: ${data.message}`);
});

app.delete('/', (req, res) => {
  data = {};
  res.status(200).send('데이터가 삭제되었습니다.');
});

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
