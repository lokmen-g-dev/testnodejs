import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const resSchema = new Schema(
    {
        clientId: {
            type: String,
            required: true
        },
        parkingId: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model('Reservation', achatSchema);