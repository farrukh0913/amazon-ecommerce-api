import Supervisors from "./supervisor-model";

const Mongoose = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;

export const addSupervisor = async (req: any, res: any) => {
    const supervisor = req.body;
    try {
        const createdrecord = await Supervisors.create(supervisor);
        if (createdrecord) {
            res.status(200).json({
                status: 'success',
                message: 'Supervisor added successfully',
                data: createdrecord
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

export const getAllSupervisor = async (req: any, res: any) => {
    try {
        const getList = await Supervisors.find();
        if (getList.length) {
            return res.status(200).json({
                status: 'Success',
                message: 'Get Products successfully',
                data: getList
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

export const removeSupervisor = async (req: any, res: any) => {
    try {
        const record: any = await Supervisors.findByIdAndDelete(new ObjectId(`${req.params.id}`));
        if (record) {
            return res.status(200).json({
                status: 'success',
                message: 'record deleted successfully',
            });
        }

    } catch (error) {
        throw new Error("Error in Deleting  record");
    }
}

export const updateSupervisor = async (req:any,res:any) =>{
    try{
        const updateSupervisors = await Supervisors.findByIdAndUpdate(new ObjectId(`${req.params.id}`),req.body);
       if(updateSupervisors){
           res.status(200).json({
               status : 'Success',
               message: 'Record Updated successfully',
               data : updateSupervisors
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