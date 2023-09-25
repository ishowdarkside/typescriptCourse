import express, { RequestHandler } from "express";
import { Todo } from "../models/todos";
const TODOS: Todo[] = [];

export const createTodo: express.RequestHandler = (req, res, next) => {
  const text = req.body.text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({
    status: "success",
    message: "Created the todo",
  });
};

export const getTodos: express.RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const update: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id == todoId);
  if (todoIndex < 0) throw new Error("Couldnt find todo");

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  res.json({
    message: "UPDATED",
    updatedTODO: TODOS[todoIndex],
  });
};

export const deleteTODO: express.RequestHandler = (req, res, next) => {
  const id = req.params.id;
  const todo = TODOS.findIndex((todo) => todo.id === id);

  if (todo < 0) throw new Error("NO DATA");

  TODOS.splice(todo, 1);
  res.status(200).json({
    status: "success",
    message: "Succcessfully deleted",
  });
};
