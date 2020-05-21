"use strict";

const logger = require("../utils/logger");
const todoListStore = require("../models/todo-list-store");
const uuid = require("uuid");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Template 1 Dashboard",
      todolist: todoListStore.getAllTodos(),
    };
    response.render("dashboard", viewData);
  },

  addTodo(request, response) {
    const todo = {
      id: uuid.v1(),
      title: request.body.title,
    };
    todoListStore.addTodo(todo);
    response.redirect("/dashboard");
  },

  deleteTodo(request, response) {
    const todoId = request.params.id;
    logger.info(`Deleting todo ${todoId}`);
    todoListStore.removeTodo(todoId);
    response.redirect("/dashboard");
  },
};

module.exports = dashboard;
