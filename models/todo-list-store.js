"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");

const todoListStore = {
  store: new JsonStore("./models/todo-list-store.json", {
    todoListCollection: [],
  }),
  collection: "todoListCollection",

  getAllTodos() {
    return this.store.findAll(this.collection);
  },

  addTodo(todo) {
    this.store.add(this.collection, todo);
    this.store.save();
  },
};

module.exports = todoListStore;
