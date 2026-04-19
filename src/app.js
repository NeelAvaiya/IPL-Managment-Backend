import cookieParser from "cookie-parser";
import express from "express";
import authRoute from "./modules/auth/auth.routes.js";
import multer from "multer";
import ApiResponse from "./common/utils/api-response.js";
import path from "path";
import ownerRoutes from "./modules/ipl-ms/routes/owner.route.js"
import playerRoutes from "./modules/ipl-ms/routes/player.route.js"
import sponsorRoutes from "./modules/ipl-ms/routes/sponsor.route.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/owners", ownerRoutes)
app.use("/api/player", playerRoutes);
app.use("/api/sponsor", sponsorRoutes);


export default app;
