const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Popka2004',
  database: 'October_7'
});

db.connect(err => {
  if (err) {
    console.error('Помилка підключення до бази даних:', err);
    return;
  }
  console.log('Підключено до бази даних');
});

// Отримати всі страви з бази даних
app.get('/dishes', (req, res) => {
  db.query('SELECT * FROM dishes', (err, result) => {
    if (err) {
      console.error('Помилка запиту:', err);
      res.status(500).send('Помилка сервера');
      return;
    }
    res.json(result);
  });
});

// Додати вибрані страви до таблиці теперішніх страв
app.post('/current_dishes', (req, res) => {
  const { selectedDishes } = req.body;
  
  // Спочатку обнуляємо всі значення колонки `present`
  const resetQuery = 'UPDATE dishes SET present = 0';
  db.query(resetQuery, (resetErr) => {
    if (resetErr) {
      console.error('Помилка скидання значень:', resetErr);
      return res.status(500).send('Помилка скидання значень');
    }

    // Оновлюємо тільки вибрані страви, встановлюючи present = 1
    if (selectedDishes.length > 0) {
      const updateQuery = `UPDATE dishes SET present = 1 WHERE id IN (?)`;
      db.query(updateQuery, [selectedDishes], (updateErr, result) => {
        if (updateErr) {
          console.error('Помилка оновлення значень:', updateErr);
          return res.status(500).send('Помилка оновлення значень');
        }
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(200); // Якщо жодна страва не вибрана, просто повертаємо OK
    }
  });
});

// Отримати список актуальних страв
app.get('/current_dishes', (req, res) => {
  db.query(`
    SELECT p.name, p.caption, p.image_url, p.price, p.order_number, c.name AS category_name
    FROM present_dishes p 
    JOIN categories c ON p.category_id = c.id
    WHERE p.present = 1
  `, (err, result) => {
    if (err) {
      console.error('Помилка запиту:', err);
      res.status(500).send('Помилка сервера');
      return;
    }
    res.json(result);
  });
});

// Запустити сервер на порту 3005
app.listen(3005, () => {
  console.log('Сервер запущено на порту 3005');
});
