import {Request,Response} from "express";
import activityService from "../services/ActivityService";

const activityController = {
    getAll: (req: Request, res: Response) => { return activityService.getActivities(res)},
    getOne: (req: Request, res: Response) => { return activityService.getActivity(req, res) },
    create: (req: Request, res: Response) => { return activityService.createActivity(req, res)},
    update: (req: Request, res: Response) => { return activityService.updateActivity(req, res)},
    delete: (req: Request, res: Response) => { return activityService.deleteActivity(req, res)},
}
export default activityController;