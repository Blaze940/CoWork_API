import {Request,Response} from "express";
import SpaceService from "../services/SpaceService";

const spaceController = {
    getAll: (req :Request, res :Response) => { return SpaceService.getSpaces(res)},
    getOneById: (req :Request, res :Response) => { return SpaceService.getSpaceById(req, res) },
    getOneByName : (req :Request, res :Response) => { return SpaceService.getSpaceByName(req, res) },
    create: (req :Request, res :Response) => { return SpaceService.createSpace(req, res)},
    updateById: (req :Request, res :Response) => { return SpaceService.updateSpaceById(req, res)},
    updateByName: (req :Request, res :Response) => { return SpaceService.updateSpaceByName(req, res)},
    delete: (req :Request, res :Response) => { return SpaceService.deleteSpace(req, res)},
}

export default spaceController;
