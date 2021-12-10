const db = require("../../data/dbConfig");

function getResources() {
  return db("resources as r");
}

async function postResources() {
  return Promise.resolve("post resources");

  //   const rows = await db("projects as p");

  //   return rows;
}

module.exports = { getResources, postResources };
