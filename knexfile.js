// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 
      'postgres://postgres:bacon@localhost/knex_lesson'
    
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'knex_lesson',
      user:     'postgres',
      password: 'bacon'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
