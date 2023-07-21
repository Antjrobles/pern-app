import express from "express";
import morgan from "morgan";

const app = express();

app.listen(3022);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json({ mesaage: "welcome to my App" }));

app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message,
    });
});

console.log("Server on port 3022");

export default app;
