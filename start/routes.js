'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register',"AuthController.register");
Route.post('/login',"AuthController.authenticate")
Route.get('/medical/:user_id',"MedicalController.index")
Route.get('/medical',"MedicalController.indexAll")
Route.post('/medical',"MedicalController.store")
Route.delete('/medical/:user_id',"MedicalController.destroy")

Route.get('/secretary/:user_id',"SecretaryController.index")
Route.post('/secretary',"SecretaryController.store")
Route.delete('/secretary/:user_id',"SecretaryController.destroy")

Route.get('/patient/:user_id',"PatientController.index")
Route.get('/patient/cpf/:cpf',"PatientController.indexCpf")
Route.post('/patient',"PatientController.store")
Route.delete('/patient/:user_id',"PatientController.destroy")

Route.get('/attendance',"AttendanceController.index")
Route.post('/attendance',"AttendanceController.store")
Route.get('/attendance/medical/:medical_id',"AttendanceController.indexMedical")
Route.get('/attendance/id/:attendance_id',"AttendanceController.find_id")
Route.put('/attendance/update/:attendance_id',"AttendanceController.update")
Route.get('/attendance/patient/:patient_id',"AttendanceController.indexPatient")
Route.delete('/attendance/:attendance_id',"AttendanceController.destroy")