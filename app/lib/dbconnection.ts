import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_URL!, {
  username: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
});
