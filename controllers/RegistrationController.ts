import {Request,Response} from "express";
import RegistrationFormService from "../services/RegistrationService";

const registrationController = {
    getAll: (req :Request, res :Response) => { return RegistrationFormService.getRegistrationForms(res)},
    getOneById: (req :Request, res :Response) => { return RegistrationFormService.getRegistrationFormById(req, res) },
    getOneByName : (req :Request, res :Response) => { return RegistrationFormService.getRegistrationFormByName(req, res) },
    create: (req :Request, res :Response) => { return RegistrationFormService.createRegistrationForm(req, res)},
    updateById: (req :Request, res :Response) => { return RegistrationFormService.updateRegistrationFormById(req, res)},
    updateByName: (req :Request, res :Response) => { return RegistrationFormService.updateRegistrationFormByName(req, res)},
    delete: (req :Request, res :Response) => { return RegistrationFormService.deleteRegistrationForm(req, res)},
}

export default registrationController;