import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { env } from "~/env";
import * as schema from "./schema";
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql, { schema });
// Create a pgTable that maps to a table in your DB
