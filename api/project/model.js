const db = require("../../data/dbConfig");

async function getProjects() {
  const p = await db("projects");

  const projects = p.map((i) => ({
    project_id: i.project_id,
    project_completed: !!i.project_completed,
    project_description: i.project_description,
    project_name: i.project_name,
  }));

  return projects;
}

async function getProjectsById(id) {
  const p = await db("projects").where("project_id", id).first();

  p.project_completed == 0
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
