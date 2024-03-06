import products from "./product-model";

const Mongoose = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;

export const addProduct = async (req: any, res: any) => {
    console.log('req: ', req.body);
    const product = req.body;
    console.log("statussss", res.status());
    try {
        const createdProduct = await products.create(product);
        if (createdProduct) {
            res.status(200).json({
                status: 'success',
                message: 'AProduct added successfully',
                data: createdProduct
            })
        } else {
            res.status(204).json({
                status: 'Error',
                message: 'Creating User Faild'
            })
        }
    }
    catch (error) {
        throw new Error('Error adding new product')
    }
}

export const getAllProducts = async (req: any, res: any) => {
    try {
        const getProductsList = await products.find();
        if (getProductsList.length) {
            return res.status(200).json({
                status: 'Success',
                message: 'Get Products successfully',
                data: getProductsList
            })
        }
        else {
            return res.status(200).json({
                status: 'Success',
                message: 'Not Found ',
                data: []
            })
        }

    } catch (error: any) {
        return res.status(400).json({
            status: 'Fail',
            message: 'Some Thing Happend on Server Side ',
            data: []
        })
    }
}

export const removeProduct = async (req: any, res: any) => {
    try {
        const product: any = await products.findByIdAndDelete(new ObjectId(`${req.params.id}`));
        if (product) {
            return res.status(200).json({
                status: 'success',
                message: 'Product deleted successfully',
            });
        }

    } catch (error) {
        throw new Error("Error in Deleting  product");
    }
}
export const getProductById = async (req: any, res: any) => {
    try {
        const product = await products.findById(new ObjectId(req.params.id));
        if (product) {
            return res.status(200).json({
                status: 'success',
                message: 'get Product successfully',
                data: product
            });
        } else {
            return res.status().json({
                status: 'Error',
                message: 'Error in getting Product',

            });
        }

    } catch (error) {
        throw new Error("Error in getting  product");
    }
}

export const updateProduct = async (req:any,res:any) =>{
    try{
        const updateProduct = await products.findByIdAndUpdate(new ObjectId(`${req.params.id}`),req.body);
       if(updateProduct){
           res.status(200).json({
               status : 'Success',
               message: 'Record Updated successfully',
               data : updateProduct
            })
        } else {   
            res.status(204).json({
                status : 'error',
                message : 'Error on update record'
            })
        }

    } catch (error) {
        console.log("error on updating record");
        throw new Error("Error on Updating user record")
        
    }

}