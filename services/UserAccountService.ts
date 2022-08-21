import {Request,Response} from "express";
import UserAccount from "../models/UserAccount";

const userAccountService = {
    getUserAccounts: async (res: Response) => {
        try {
            const userAccounts = await UserAccount.find();
            return res.status(200).json(userAccounts);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getUserAccountById: async (req: Request, res: Response) => {
        try {
            const userAccount = await UserAccount.findById(req.params.id);
            if (!userAccount) {
                return res.status(404).json({ message: "UserAccount not found" });}
            return res.status(200).json(userAccount);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getUserAccountByName : async (req: Request, res: Response) => {
        try {
            const userAccount = await UserAccount.find({name: req.params.name});
            if (!userAccount) {
                return res.status(404).json({ message: "UserAccount with name : "+req.params.name+" not found" });
            }
            return res.status(200).json(userAccount);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createUserAccount: async (req: Request, res: Response) => {
        try {
            const userAccount = await UserAccount.create(req.body);
            return res.status(201).json(userAccount);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateUserAccountById: async (req: Request, res: Response) => {
        try {
            const userAccount = await UserAccount.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(userAccount);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateUserAccountByName: async (req: Request, res: Response) => {
        try {
            const userAccount = await UserAccount.findOneAndUpdate({name: req.params.name}, req.body, {
                new: true,
            });
            return res.status(200).json(userAccount);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteUserAccount: async (req : Request, res: Response) => {
        try {
            const userAccount = await UserAccount.findByIdAndDelete(req.params.id);
            return res.status(200).json(userAccount);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

export default userAccountService ;