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
  if (!Array.isArray(selectedDishes) || selectedDishes.length === 0) {
    return res.status(400).send('Неправильний формат даних');
  }

  // Оновити вибрані страви у таблиці present_dishes
  const values = selectedDishes.map(dishId => [dishId, 1, Date.now()]);
  db.query('DELETE FROM present_dishes', (deleteErr) => {
    if (deleteErr) {
      console.error('Помилка видалення:', deleteErr);
      res.status(500).send('Помилка видалення');
      return;
    }

    const insertQuery = `
      INSERT INTO present_dishes (dish_id, name, caption, image_url, price, order_number, category_id, present, updated)
      SELECT id, name, caption, image_url, price, order_number, category_id, 1, ?
      FROM dishes WHERE id IN (?)
    `;

    db.query(insertQuery, [Date.now(), selectedDishes], (err, result) => {
      if (err) {
        console.error('Помилка вставки:', err);
        res.status(500).send('Помилка сервера');
        return;
      }
      res.sendStatus(200);
    });
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
