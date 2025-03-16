import dotenv from 'dotenv';
import express from 'express';
import connectDb from "./database/db.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Server working fine!");
});

// importing routes 
import userRoutes from './routes/userRoutes.js';

// using routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDb();
});