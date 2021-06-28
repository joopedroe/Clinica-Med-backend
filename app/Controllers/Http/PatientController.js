'use strict'

const Patient =use('App/Models/Patient')

class PatientController {
  
  async index ({ params, response, view }) {
    const user_id= params.user_id
    const patient = await Patient.query('user_id',user_id).with('user').fetch()
    if(patient==null){
      return response.status(203).send({
        message: "Patient not Found"
      })
    }
     return patient;
  }

  async indexCpf ({ params, response, view }) {
    const cpf= params.cpf
    console.log(cpf)
    const patient = await Patient.findBy('cpf',cpf)
    if(patient==null){
      return response.status(203).send({
        message: "Patient not Found"
      })
    }
    return patient;
    
  }

  
  async create ({ request, response, view }) {
  }

  
  async store ({ request, response }) {
    const data = request.only(['name','cpf','num_registry','user_id'])
    const patient= await Patient.create({...data});
    return patient;
  }

  
  async show ({ params, request, response, view }) {
  }

 
  async edit ({ params, request, response, view }) {
  }

 
  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
    const user_id= params.user_id
    const patient = await Patient.findBy('user_id',user_id)
    await patient.delete()
    return response.status(200).send({
      message: "Successfully deleted"
    })
  }
}

module.exports = PatientController
