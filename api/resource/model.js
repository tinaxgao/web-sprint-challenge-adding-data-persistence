const db = require("../../data/dbConfig");

function getResources() {
  return db("resources");
}

function getResourceById(id) {
  return db('resources').where('resource_id', id).first()
}

async function addResource(resource) {
  return await db('resources').insert(resource)
  .then(([id]) => {return getResourceById(id)})
}

module.exports = { getResources, addResource };
