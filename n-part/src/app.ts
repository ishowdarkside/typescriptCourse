import express from "express";
import todoRoutes from "./routes/todo";
import { json } from "body-parser";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
app.use(json());
app.use("/todos", todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    res.status(400).json({
      message: err.message,
    });
  }
);

app.listen(3000);
