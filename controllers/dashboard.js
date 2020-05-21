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
      title: request.body.title,
    };
    todoListStore.addTodo(todo);
    response.redirect("/dashboard");
  },
};

module.exports = dashboard;
