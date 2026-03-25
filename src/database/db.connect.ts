import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


const connectionString = process.env.DB_URL || "postgresql://postgres:yourpassword@localhost:5432/yourdbname";

export const pool = new Pool({
  connectionString,
});


export const db = drizzle(pool);

export const connectDb = async () => {
  try {
    const client = await pool.connect();
    console.log("✅ Connected to the database successfully");
    
   
    await client.query("SELECT 1"); 
    client.release();
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    
  }
};



// import { drizzle } from "drizzle-orm/node-postgres";
// import { Client } from "pg";

// const client = new Client({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "root",
//   database: "studycosmos-db",
// });

// const connectToDatabase = async () => {
//   await client.connect();
//   console.log("Connected to the database");
// };

// const db = drizzle(client);
// export { db, connectToDatabase };
