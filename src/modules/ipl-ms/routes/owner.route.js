import { Router } from "express";
import * as controller from "../controllers/owner.controller.js"
const router = Router();

// Create a new owner
router.post("/", )

// Get all owners
router.get("/")

// get owner by id
router.get("/:id")

// update owner
router.put("/:id")

// delete owner
router.delete("/:id")