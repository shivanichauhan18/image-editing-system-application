var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'system_design'
    }
  })
knex.schema.createTable("student_submited_task", (table) => {
    table.increments("id")
    table.string('name')
    table.string('email')
    table.integer("user_id")
}
)
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });

