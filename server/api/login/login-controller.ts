import Supervisors from "../supervisors/supervisor-model";
import login from "./login-model";
const Mongoose = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;


export const loginAdminAccount = async (req: any, res: any) => {
    try {
        const admin: any = req.body
        console.log('admin: ', admin);
        let cred = {
            email: 'admin@gmail.com',
            password: 'admin'
        }
        if (admin.role === "admin") {
            if (admin.email === cred.email && admin.password === cred.password) {
                res.status(200).json({
                    status: 'success',
                    message: 'Account login successfully',
                    data: { email: 'admin@gmail.com', role: 'admin' }
                })
            } else {
                res.status({
                    status: 'error',
                    message: 'error in login account'
                })
                return res.status(401).json({ message: "Invalid email and password" }).end();

            }
        } else {
            const { email,password } = req.body;
            const record = await Supervisors.findOne({ email,password });
            if(record){
                res.status(200).json({
                    status: 'success',
                    message: 'Account login successfully',
                    data: { email: record.email, role: 'supervisor' }
                })
            } else {
                    res.status({
                        status: 'error',
                        message: 'error in login account'
                    })
                    return res.status(401).json({ message: "Invalid email and password" }).end();

            }
        }
    }
    catch (error) {
        throw new Error('Error in creating new account')
    }
}