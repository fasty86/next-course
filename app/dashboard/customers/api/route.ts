import postgres from 'postgres';
export const dynamic = 'force-static';
const sql = postgres(process.env.POSTGRES_URL!, {
  username: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
  // ssl: { rejectUnauthorized: false },
});
async function getCustomers() {
  const data = await sql`
    SELECT * FROM customers;
  `;

  return data;
}

export async function GET() {
  try {
    return Response.json(await getCustomers());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
