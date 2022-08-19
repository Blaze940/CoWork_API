import timeSlotService from "../services/TimeSlotService";
import {Request, Response} from "express";

const timeSlotController = {
    getAll: (req :Request, res :Response) => { return timeSlotService.getTimeSlots(res)},
    getOne: (req :Request, res :Response) => { return timeSlotService.getTimeSlot(req, res) },
    create: (req :Request, res :Response) => { return timeSlotService.createTimeSlot(req, res)},
    update: (req :Request, res :Response) => { return timeSlotService.updateTimeSlot(req, res)},
    delete: (req :Request, res :Response) => { return timeSlotService.deleteTimeSlot(req, res)},
}

export default timeSlotController;