const db = require("../../data/dbConfig");

async function getTasks() {
  const t = await db("tasks").join(
    "projects",
    "projects.project_id",
    "tasks.project_id"
  );

  const tasks = t.map((i) => {
    if (i.task_completed === 0) {
      i.task_completed = false;
    } else {
      i.task_completed = true;
    }
    return i;
  });

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
