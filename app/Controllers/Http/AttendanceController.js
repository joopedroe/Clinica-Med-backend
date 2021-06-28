'use strict'

const Attendance =use('App/Models/Attendance')


class AttendanceController {

  async index ({ response}) {
    const attendance = await Attendance.query('report',1).with('patient').with('medical').fetch()
    if(attendance==null){
      return response.status(203).send({
        message: "Attendance not Found"
      })
    }
    return attendance;
  }

  
  async find_id ({ params, response}) {
    const id=params.attendance_id
    const attendance = await Attendance.query().where('id',id).with('patient').with('medical').fetch()
    if(attendance==null){
      return response.status(203).send({
        message: "Attendance not Found"
      })
    }
    return attendance;
  }


  async store ({ request}) {
    const data = request.only(['medical_id','patient_id','datetime_input','status','user_id','datetime_output','report'])
    const attendance = await Attendance.create({...data});
    return attendance;
  }


  async indexMedical ({ params, response, }) {
    const medical_id=params.medical_id
    const attendance = await Attendance.query().where('medical_id',medical_id).with('patient').with('medical').fetch()
    if(attendance==null){
      return response.status(203).send({
        message: "Attendance not Found"
      })
    }
    return attendance;
  }

  async indexPatient ({ params, response, }) {
    const patient_id=params.patient_id
    const attendance = await Attendance.query().where('patient_id',patient_id).with('patient').with('medical').fetch()
    if(attendance==null){
      return response.status(203).send({
        message: "Attendance not Found"
      })
    }
    return attendance;
  }
 
  async edit ({ params, request, response, view }) {
  }

  
  async update ({ params, request, response }) {
    const data = request.only(['medical_id','patient_id','status','datetime_input','user_id','datetime_output','report'])
    const attendance_id= params.attendance_id
    const attendance = await Attendance.query().where('id',attendance_id).update(data)
    return response.status(200).send({
      message: "Successfully updated"
    })
  }


  async destroy ({ params, request, response }) {
    const attendance_id= params.attendance_id
    const attendance = await Attendance.findBy('id',attendance_id)
    await attendance.delete()
    return response.status(200).send({
      message: "Successfully deleted"
    })
  }
}

module.exports = AttendanceController
