import pg from "pg";
const { Pool } = pg;

export const pool = new Pool ({
  port: 5422,
  host: 'localhost',
  user: 'pern',
  password: 'pern',
  database: 'taskdb'
});


pool.on('connect', () => {
  console.log('Database connected');
})