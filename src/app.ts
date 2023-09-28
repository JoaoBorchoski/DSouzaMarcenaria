import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./erros";
import cors from "cors";

import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
import clientRoutes from "./routes/client.routes";
import { orderRoutes } from "./routes/order.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/clients", clientRoutes);
app.use("/orders", orderRoutes);

app.use(handleErros);

export default app;
