import FeedBack from "./feedback-model";

const Mongoose = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;

export const addFeedBack = async (req: any, res: any) => {
    const feedback = req.body;
    try {
        const createdrecord = await FeedBack.create(feedback);
        if (createdrecord) {
            res.status(200).json({
                status: 'success',
                message: 'Feedback added successfully',
                data: createdrecord
            })
        } else {
            res.status(204).json({
                status: 'Error',
                message: 'Failed to sublit Feedback'
            })
        }
    }
    catch (error) {
        throw new Error('Error adding FeedBack');
    }
}

export const getAllFeedback = async (req: any, res: any) => {
    try {
        const getList = await FeedBack.find();
        if (getList.length) {
            return res.status(200).json({
                status: 'Success',
                message: 'Get feedback successfully',
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

export const removeFeedback = async (req: any, res: any) => {
    try {
        const record: any = await FeedBack.findByIdAndDelete(new ObjectId(`${req.params.id}`));
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