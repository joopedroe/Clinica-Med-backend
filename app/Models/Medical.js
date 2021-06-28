'use strict'


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Medical extends Model {
    attendance () {
        return this.hasMany('App/Models/Attendance')
      }
      user () {
        return this.belongsTo('App/Models/User')
      }
}

module.exports = Medical
