import { type User, type InsertUser, type FocusGroupSignup, type InsertFocusGroupSignup, users, focusGroupSignups } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const db = drizzle(pool);

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createFocusGroupSignup(signup: InsertFocusGroupSignup): Promise<FocusGroupSignup>;
  getAllFocusGroupSignups(): Promise<FocusGroupSignup[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createFocusGroupSignup(insertSignup: InsertFocusGroupSignup): Promise<FocusGroupSignup> {
    const result = await db.insert(focusGroupSignups).values(insertSignup).returning();
    return result[0];
  }

  async getAllFocusGroupSignups(): Promise<FocusGroupSignup[]> {
    return await db.select().from(focusGroupSignups);
  }
}

export const storage = new DatabaseStorage();
