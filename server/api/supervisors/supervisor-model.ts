import { Model, Schema, model } from 'mongoose';

let product:Schema = new Schema({
    firstName: { type:String, required:false, trim:true},
    lastName: { type:String, required:false, trim:true},
    email: { type:String, required:false, trim:true},
    userName: { type:String, required:false, trim:true},
    password: { type:String, required:false, trim:true},
})

const Supervisors = model('Supervisors',product);
export default Supervisors  