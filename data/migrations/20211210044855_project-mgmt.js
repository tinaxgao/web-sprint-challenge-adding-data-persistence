exports.up = async function (knex) {
  await knex.schema
    .createTable("project", (table) => {
      table.increments("project_id");
      table.string("project_name").notNullable();
      table.string("project_description");
      table.boolean("project_completed");
    })
    .createTable("resource", (table) => {
      table.increments("resource_id");
      table.string("resource_name").notNullable().unique();
      table.string("resource_description");
    })
    .createTable("task", (table) => {
      table.increments("task_id");
      table.string("task_description").notNullable();
      table.string("task_notes");
      table.boolean("task_completed");
      table
        .integer("project_id")
        .references("project_id")
        .inTable("project")
        .unsigned()
        .notNullable()
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (table) => {
        table.increments("project_resources_id")
        table
        .integer("project_id")
        .references("project_id")
        .inTable("project")
        .unsigned()
        .notNullable()
        .onDelete("CASCADE");
        table
        .integer("resource_id")
        .references("resource_id")
        .inTable("resource")
        .unsigned()
        .notNullable()
        .onDelete("CASCADE");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
