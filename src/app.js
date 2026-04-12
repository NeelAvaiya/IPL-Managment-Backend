import cookieParser from "cookie-parser";
import express from "express";
import authRoute from "./modules/auth/auth.routes.js";
import multer from "multer";
import ApiResponse from "./common/utils/api-response.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const ext = path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix + ext)
  }
})

const upload = multer({storage});

app.post("/upload", upload.single("file"), (req, res) => {
    console.log(req.file);

    ApiResponse.ok(res, "File uploaded")
})


app.use("/api/auth", authRoute);

export default app;
