const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const ejs = require('ejs');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'js_mahasiswa'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Operasi CRUD
app.get('/', (req, res) => {
  const query = 'SELECT * FROM tb_mh';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.render('index', { mahasiswa: result });
  });
});

app.post('/mahasiswa', (req, res) => {
  const { nama, prodi, semester } = req.body;
  const query = 'INSERT INTO tb_mh (nama, prodi, semester) VALUES (?, ?, ?)';
  db.query(query, [nama, prodi, semester], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM tb_mh WHERE id=?';
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      res.render('edit', { mahasiswa: result[0] });
    });
  });
  
app.put('/edit/:id', (req, res) => {
    const { nama, prodi, semester } = req.body;
    const { id } = req.params;
    const query = 'UPDATE tb_mh SET nama=?, prodi=?, semester=? WHERE id=?';
    db.query(query, [nama, prodi, semester, id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tb_mh WHERE id=?';
  db.query(query, [id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});



// Jalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
