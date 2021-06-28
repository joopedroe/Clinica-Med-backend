'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttendanceSchema extends Schema {
  up () {
    this.create('attendances', (table) => {
      table.increments()
      table
        .integer('medical_id')
        .unsigned()
        .references('id')
        .inTable('medicals')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('patient_id')
        .unsigned()
        .references('id')
        .inTable('patients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.boolean('status')
      table.datetime('datetime_input')
      table.datetime('datetime_output')
      table.string('report')
      table.timestamps()
    })
  }

  down () {
    this.drop('attendances')
  }
}

module.exports = AttendanceSchema
