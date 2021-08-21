const knex = require("knex")

const database = knex({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "db-ricebowl",
    },
  });

  module.exports = database