const db = require("../../data/dbConfig");

  async function getTasks() {
    const t = await db("tasks")
    .join("projects", "projects.project_id", "tasks.project_id");
  
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
  
  module.exports = { getTasks }
  