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
      db.query(updateQuery, [selectedDishes], (updateErr) => {
        if (updateErr) {
          console.error('Помилка оновлення значень:', updateErr);
          return res.status(500).send('Помилка оновлення значень');
        }

        // Очищаємо таблицю present_dishes
        const deleteQuery = `DELETE FROM present_dishes`;
        db.query(deleteQuery, (deleteErr) => {
          if (deleteErr) {
            console.error('Помилка видалення з present_dishes:', deleteErr);
            return res.status(500).send('Помилка видалення даних');
          }

          // Вставляємо нові дані з таблиці dishes, де present = 1
          const insertPresentDishesQuery = `
            INSERT INTO present_dishes (dish_id, name, caption, image_url, price, order_number, category_id, present, updated)
            SELECT id, name, caption, image_url, price, order_number, category_id, present, UNIX_TIMESTAMP()
            FROM dishes WHERE present = 1
          `;
          db.query(insertPresentDishesQuery, (err) => {
            if (err) {
              console.error('Помилка оновлення present_dishes:', err);
              return res.status(500).send('Помилка оновлення таблиці present_dishes');
            }
            res.sendStatus(200);
          });
        });
      });
    } else {
      // Якщо жодна страва не вибрана, очищуємо таблицю present_dishes
      db.query('DELETE FROM present_dishes', (err) => {
        if (err) {
          console.error('Помилка очищення present_dishes:', err);
          return res.status(500).send('Помилка очищення таблиці present_dishes');
        }
        res.sendStatus(200);
      });
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

// Отримати дані про конкретну страву за ID
app.get('/dishes/:id', (req, res) => {
  const dishId = req.params.id;
  db.query('SELECT * FROM dishes WHERE id = ?', [dishId], (err, result) => {
    if (err) {
      console.error('Помилка запиту:', err);
      res.status(500).send('Помилка сервера');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('Страву не знайдено');
      return;
    }
    res.json(result[0]);
  });
});

// Оновлення даних конкретної страви за ID
app.put('/dishes/:id', (req, res) => {
  const dishId = req.params.id;
  const { name, caption, image_url, price, order_number, category_id } = req.body;

  const updateQuery = `
    UPDATE dishes SET name = ?, caption = ?, image_url = ?, price = ?, order_number = ?, category_id = ?
    WHERE id = ?
  `;
  db.query(updateQuery, [name, caption, image_url, price, order_number, category_id, dishId], (err, result) => {
    if (err) {
      console.error('Помилка оновлення даних:', err);
      res.status(500).send('Помилка сервера');
      return;
    }
    res.sendStatus(200);
  });
});

// Запустити сервер на порту 3005
app.listen(3005, () => {
  console.log('Сервер запущено на порту 3005');
});
