'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Attendance extends Model {
    medical () {
        return this.belongsTo('App/Models/Medical')
      }
    patient () {
        return this.belongsTo('App/Models/Patient')
      }
}

module.exports = Attendance
