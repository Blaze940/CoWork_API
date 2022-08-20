import {Request,Response} from "express";
import CardService from "../services/CardService";

const cardController = {
    getAll: (req :Request, res :Response) => { return CardService.getCards(res)},
    getOneById: (req :Request, res :Response) => { return CardService.getCardById(req, res) },
    getOneByName : (req :Request, res :Response) => { return CardService.getCardByName(req, res) },
    create: (req :Request, res :Response) => { return CardService.createCard(req, res)},
    updateById: (req :Request, res :Response) => { return CardService.updateCardById(req, res)},
    updateByName: (req :Request, res :Response) => { return CardService.updateCardByName(req, res)},
    delete: (req :Request, res :Response) => { return CardService.deleteCard(req, res)},
}

export default cardController;