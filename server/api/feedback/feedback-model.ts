import { Model, Schema, model } from 'mongoose';

let product:Schema = new Schema({
    name :{ type:String, required:false, trim:true},
    email: { type:String, required:false, trim:true},
    website: { type:String, required:false, trim:true},
    comment: { type:String, required:false, trim:false}
})

const FeedBack = model('FeedBack',product);
export default FeedBack  