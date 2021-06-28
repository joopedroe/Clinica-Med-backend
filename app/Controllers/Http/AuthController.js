'use strict'
const User=use('App/Models/User')

class AuthController {
    async register({request}){
        const data=request.only(['username','email','password','type_user'])
        const user= await User.create(data)
        return user
    }

    async authenticate({request,auth, response}){
        const {email, password} = request.all()
        const token = await auth.attempt(email, password)
        const user= await User.find({'email':email})
        return response.status(200).json({data: token, user:user.type_user})
    }
}

module.exports = AuthController
