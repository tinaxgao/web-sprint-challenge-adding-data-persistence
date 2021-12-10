const db = require("../../data/dbConfig");

async function getProjects() {
   return db("projects as p");
}

module.exports = { getProjects }
