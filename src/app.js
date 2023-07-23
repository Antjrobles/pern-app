import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import taskRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();


app.listen(3022);

// MIDDLEWARES
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//ROUTES
app.get("/", (req, res) => res.json({ message: "welcome to my App" }));

app.use(taskRoutes);
app.use(authRoutes);


// Errors Handlers
app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message,
    });
});

console.log("Server on port 3022");

export default app;
