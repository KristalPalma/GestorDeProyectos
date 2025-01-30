import mysql from 'mysql2/promise'

// Create connection pool
export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '123456',
  database: 'login_system',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})