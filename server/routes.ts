import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFocusGroupSignupSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Focus Group Signup endpoint
  app.post("/api/focus-group-signup", async (req, res) => {
    try {
      const validatedData = insertFocusGroupSignupSchema.parse(req.body);
      const signup = await storage.createFocusGroupSignup(validatedData);
      res.status(201).json(signup);
    } catch (error) {
      console.error("Error creating focus group signup:", error);
      res.status(400).json({ error: "Invalid signup data" });
    }
  });

  // Get all signups (optional - for admin view)
  app.get("/api/focus-group-signups", async (req, res) => {
    try {
      const signups = await storage.getAllFocusGroupSignups();
      res.json(signups);
    } catch (error) {
      console.error("Error fetching signups:", error);
      res.status(500).json({ error: "Failed to fetch signups" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
