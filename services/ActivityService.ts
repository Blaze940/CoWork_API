import {Request,Response} from "express";
import Activity from "../models/Activity";

const activityService = {
    getActivities: async (res: Response) => {
        try {
            const activities = await Activity.find();
            return res.status(200).json(activities);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getActivity: async (req: Request, res: Response) => {
        try {
            const activity = await Activity.findById(req.params.id);
            if (!activity) {
                return res.status(404).json({ message: "Activity not found" });
            }
            return res.status(200).json(activity);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createActivity: async (req: Request, res: Response) => {
        try {
            const activity = await Activity.create(req.body);
            return res.status(201).json(activity);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateActivity: async (req: Request, res: Response) => {
        try {
            const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(activity);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteActivity: async (req: Request, res: Response) => {
        try {
            await Activity.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Activity with ID : "+ req.params.id + " has been deleted" });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
export default activityService;

