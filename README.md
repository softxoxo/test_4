## Установка и запуск

1. Клонируйте репозиторий:
git clone https://github.com/softxoxo/test_4.git

2. Перейдите в директорию проекта:
cd test_4

3. Установите зависимости:
npm install

4. Создайте файл `.env` и укажите в нем соответствующие значения для вашей базы данных.
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=test

5. Скомпилируйте TypeScript:
npm run build

6. Запустите проект:
npm start

7. Создайте таблицу "tasks" в postgress
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## Примеры запросов в Insomnia

1. Создание новой задачи:
- Метод: `POST`
- URL: `/tasks`
- Тело запроса:
  ```json
  {
    "title": "Моя первая задача",
    "description": "Это описание моей первой задачи"
  }
  ```

2. Получение списка всех задач:
- Метод: `GET`
- URL: `http://localhost:3000/tasks`

3. Получение задачи по ID:
- Метод: `GET`
- URL: `/tasks/:id`
- Пример: `http://localhost:3000/tasks/1`

4. Обновление задачи по ID:
- Метод: `PUT`
- URL: `/tasks/:id`
- Пример: `http://localhost:3000/tasks/1`
- Тело запроса:
  ```json
  {
    "title": "Обновленная задача",
    "description": "Это обновленное описание задачи",
    "status": "completed"
  }
  ```

5. Удаление задачи по ID:
- Метод: `DELETE`
- URL: `/tasks/:id`
- Пример: `http://localhost:3000/tasks/1`