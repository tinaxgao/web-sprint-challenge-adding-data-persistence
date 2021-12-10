const db = require("../../data/dbConfig");

async function getProjects() {
  const p = await db("projects");

  const projects = p.map((i) => {
    if (i.project_completed === 0) {
      i.project_completed = false;
    } else {
      i.project_completed = true;
    }
    return i;
  });

  return projects;
}

async function getProjectsById(id) {
  const p = await db("projects").where("project_id", id).first();

  p.project_completed === 0
    ? (p.project_completed = false)
    : (p.project_completed = true);

  return p;
}

async function addProject(project) {
  return await db("projects")
    .insert(project)
    .then(([id]) => {
      return getProjectsById(id);
    });
}

module.exports = { getProjects, addProject };
