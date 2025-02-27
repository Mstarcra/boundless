import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
// dotenv.config();

console.log( process.env.DB_HOST);
const db = await mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    ca: process.env.DB_SSL_CA, // 修正為直接 ssl 配置
    rejectUnauthorized: true,
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
});

export default db;
