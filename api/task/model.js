const db = require("../../data/dbConfig");

async function getTasks() {
  return db("tasks as t");
  }
  
  module.exports = { getTasks }
  