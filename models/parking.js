import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const parkSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        nbPlaces: {
            type: String,
            required: true
        },
        nbFreePlaces: {
            type: Number,
            required: true
        },
        createdAt: {
            type: Date,
            required: true
        },
        updatedAt: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model('Park', parkSchema);