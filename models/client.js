import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const clientSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        phone: {
            type: Number
        },
        password: {
            type: String,
            required: true

          
        },
        image:{
        type:String,
        required: true

        }
    },
    {
        timestamps: true
    }
);

export default model('Client', clientSchema);