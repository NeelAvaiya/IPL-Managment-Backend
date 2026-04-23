import { Router } from "express";
import * as controller from "../controllers/broadcaster.controller.js"
const router = Router();

// Create a new broadcaster
router.post("/", controller.createBroadcaster);

// Get all broadcasters
router.get("/", controller.getAllBroadcasters);

// get broadcaster by id
router.get("/:id", controller.getBroadcasterById);

// update broadcaster
router.put("/:id", controller.updateBroadcaster);

// delete broadcaster
router.delete("/:id", controller.deleteBroadcaster);

export default router;