import { type User, type InsertUser, type FocusGroupSignup, type InsertFocusGroupSignup } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createFocusGroupSignup(signup: InsertFocusGroupSignup): Promise<FocusGroupSignup>;
  getAllFocusGroupSignups(): Promise<FocusGroupSignup[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private focusGroupSignups: Map<string, FocusGroupSignup>;

  constructor() {
    this.users = new Map();
    this.focusGroupSignups = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createFocusGroupSignup(insertSignup: InsertFocusGroupSignup): Promise<FocusGroupSignup> {
    const id = randomUUID();
    const signup: FocusGroupSignup = {
      ...insertSignup,
      id,
      createdAt: new Date(),
    };
    this.focusGroupSignups.set(id, signup);
    return signup;
  }

  async getAllFocusGroupSignups(): Promise<FocusGroupSignup[]> {
    return Array.from(this.focusGroupSignups.values());
  }
}

export const storage = new MemStorage();
