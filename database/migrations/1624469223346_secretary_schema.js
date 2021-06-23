'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SecretarySchema extends Schema {
  up () {
    this.create('secretaries', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.date('admission')
      table.timestamps()
    })
  }

  down () {
    this.drop('secretaries')
  }
}

module.exports = SecretarySchema
