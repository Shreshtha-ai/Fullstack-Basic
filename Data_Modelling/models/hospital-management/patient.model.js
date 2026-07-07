import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        diagnosedWith: {
            type: String,
            required: true
        },
        admittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
        age: {
            type: Number,
            required: true,
        },
        bloodGroup: {
            type: String,
            required: true,

        },
        gender: {
            type: String,
            enum: ["MALE", "FEMALE", "OTHER"],
            required: true
        },
        address: {
            type: String,
            required: true
        },


    }, { timestamps: true });

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)