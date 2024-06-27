// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id')

    table.string('email').unique()
    table.string('password')

    table.string('googleId')

    table.string('facebookId')

    table.string('githubId')

    table.string('avatar')

    table.string('name')

    table.string('organizationId')

    table.string('roleId')





  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}