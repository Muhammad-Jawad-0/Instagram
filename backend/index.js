import "dotenv/config"
import express from "express";
import cors from "cors"
import {connectDB} from "./db.js"
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"

const app = express();
// dotenv.config()

//database connection
connectDB()

//middleware
app.use(express.json())
app.use(cors())

// routes

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)

const port = process.env.PORT || 8080;
app.listen(port,() => {console.log(`Listen on port ${port}... `)})

