import express from "express";
import { createTodo, getTodos, update, deleteTODO } from "../controllers/todos";
const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.patch("/:id", update);
router.delete("/:id", deleteTODO);

export default router;
