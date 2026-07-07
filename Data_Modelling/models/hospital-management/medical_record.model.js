import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
    {
        patient:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Patient"
        },
        doctor:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        },
        diagnosis:{
            type:String,
            required: true,
        },
        symptoms:{
            type:String,
            required: true
        },
        prescription:{
            type:String,
            required: true
        },
        

}, {timestamps: true});

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)