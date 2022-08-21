import {Request,Response} from "express";
import RegistrationForm from "../models/Registration";

const registrationService = {
    getRegistrationForms: async (res: Response) => {
        try {
            const registrationForms = await RegistrationForm.find();
            return res.status(200).json(registrationForms);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getRegistrationFormById: async (req : Request, res: Response) => {
        try {
            const registrationForm = await RegistrationForm.findById(req.params.id);
            if (!registrationForm) {
                return res.status(404).json({ message: "RegistrationForm not found" });}
            return res.status(200).json(registrationForm);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getRegistrationFormByName : async (req : Request, res: Response) => {
        try {
            const registrationForm = await RegistrationForm.find({name: req.params.name});
            if (!registrationForm) {
                return res.status(404).json({ message: "RegistrationForm with name : "+req.params.name+" not found" });
            }
            return res.status(200).json(registrationForm);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createRegistrationForm: async (req: Request, res: Response) => {
        try {
            const registrationForm = await RegistrationForm.create(req.body);
            return res.status(201).json(registrationForm);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateRegistrationFormById: async (req: Request, res: Response) => {
        try {
            const registrationForm = await RegistrationForm.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(registrationForm);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateRegistrationFormByName: async (req: Request, res: Response) => {
        try {
            const registrationForm = await RegistrationForm.findOneAndUpdate({name: req.params.name}, req.body, {
                new: true,
            });
            return res.status(200).json(registrationForm);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteRegistrationForm: async (req : Request, res: Response) => {
        try {
            const registrationForm = await RegistrationForm.findByIdAndDelete(req.params.id);
            return res.status(200).json(registrationForm);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default registrationService;