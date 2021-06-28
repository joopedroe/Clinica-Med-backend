'use strict'

const Secretary =use('App/Models/Secretary')

class SecretaryController {
  
  async index ({ params, request, response, view }) {
    const user_id= params.user_id
    const secretary = await Secretary.query('user_id',user_id).with('user').fetch()
    if(secretary==null){
      return response.status(203).send({
        message: "Secretary not Found"
      })
    }
    return secretary;
  }


  async create ({ request, response, view }) {
  }


  async store ({ request, response }) {
    const data = request.only(['name','admission','user_id',])
    const secretary= await Secretary.create({...data});
    return secretary;
  }

  
  async show ({ params, request, response, view }) {
  }

  
  async edit ({ params, request, response, view }) {
  }

 
  async update ({ params, request, response }) {
  }

 
  async destroy ({ params, response }) {
    const user_id= params.user_id
    const secretary = await Secretary.findBy('user_id',user_id)
    await secretary.delete()
    return response.status(200).send({
      message: "Successfully deleted"
    })
  }
}

module.exports = SecretaryController
