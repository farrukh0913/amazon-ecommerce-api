import { Model, Schema, model } from 'mongoose';

let product:Schema = new Schema({
    productName: { type:String, required:false, trim:true},
    price: { type:String, required:false, trim:true},
    discription: { type:String, required:false, trim:true},
    image: { type:String, required:false, trim:false}
})

const products = model('productmodels',product);
export default products  
