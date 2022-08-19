import {Request, Response} from "express";
import TimeSlot from "../models/TimeSlot";

const timeSlotService = {
    getTimeSlots: async (res: Response) => {
        try {
            const timeSlots = await TimeSlot.find();
            return res.status(200).json(timeSlots);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getTimeSlot: async (req: Request, res: Response) => {
        try {
            const timeSlot = await TimeSlot.findById(req.params.id);
            if (!timeSlot) {
                return res.status(404).json({ message: "TimeSlot not found" });
            }
            return res.status(200).json(timeSlot);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createTimeSlot: async (req: Request, res: Response) => {
        try {
            const timeSlot = await TimeSlot.create(req.body);
            return res.status(201).json(timeSlot);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateTimeSlot: async (req: Request, res: Response) => {
        try {
            const timeSlot = await TimeSlot.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(timeSlot);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteTimeSlot: async (req: Request, res: Response) => {
        try {
            await TimeSlot.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "TimeSlot with ID : "+ req.params.id + " has been deleted" });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default timeSlotService;