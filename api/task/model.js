const db = require("../../data/dbConfig");

async function getTasks() {
  const t = await db("tasks").join(
    "projects",
    "projects.project_id",
    "tasks.project_id"
  );

  const tasks = t.map((i) => ({
    task_id: i.task_id,
    task_completed: !!i.task_completed,
    task_description: i.task_description,
    task_notes: i.task_notes,
    project_id: i.project_id,
    project_name: i.project_name,
    project_description: i.project_description
  }));

  return tasks;
}

async function getTasksById(id) {
  const t = await db("tasks")
    .join("projects", "projects.project_id", "tasks.project_id")
    .where("task_id", id).first();

  t.task_completed === 0
    ? (t.task_completed = false)
    : (t.task_completed = true);

  return t;
}

async function addTask(task) {
  return await db("tasks")
    .insert(task)
    .then(([id]) => {
      return getTasksById(id);
    });
}

module.exports = { getTasks, addTask };
