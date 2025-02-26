import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const db = await mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialectOptions: {
      ssl: {
        ca: process.env.DB_SSL_CA, // 添加 CA 證書
        rejectUnauthorized: true, // 強制驗證證書
      },
    },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
});

export default db;
