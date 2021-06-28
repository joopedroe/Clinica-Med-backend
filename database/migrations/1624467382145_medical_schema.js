'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const User = use('Schema')


class MedicalSchema extends Schema {
  up () {
    this.create('medicals', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.boolean('isAdmin').notNullable()
      table.string('registry').notNullable()
      table.string('specialty').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicals')
  }
}

module.exports = MedicalSchema
