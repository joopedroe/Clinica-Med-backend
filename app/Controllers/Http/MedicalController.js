'use strict'
const Medical =use('App/Models/Medical')


/**
 * Resourceful controller for interacting with medicals
 */
class MedicalController {
  
  async index ({ params, response}) {
    const user_id= params.user_id
    const medical = await Medical.query('user_id',user_id).with('user')
    .fetch()
    if(medical==null){
      return response.status(203).send({
        message: "Medical not Found"
      })
    }
    return medical
  }
  async indexAll ({ response}) {
    const medical = await Medical.all()
    if(medical==null){
      return response.status(203).send({
        message: "Medical not Found"
      })
    }
    return medical
  }



 
  async store ({ request, response }) {
    const data = request.only(['name','isAdmin','registry','user_id','specialty'])
    const medical= await Medical.create({...data});
    return medical;
  }

  /**
   * Display a single medical.
   * GET medicals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }




  async update ({ params, request, response }) {
  }


  async destroy ({ params, response }) {
    const user_id= params.user_id
    const medical = await Medical.findBy('user_id',user_id)
    await medical.delete()
    return response.status(200).send({
      message: "Successfully deleted"
    })
  }
}

module.exports = MedicalController
