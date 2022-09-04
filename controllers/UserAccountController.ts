import {Request,Response} from "express";
import UserAccountService from "../services/UserAccountService";

const userAccountController = {
    getAll: (req :Request, res :Response) => { return UserAccountService.getUserAccounts(res)},
    signUp : (req :Request, res :Response) => { return UserAccountService.signUp(req,res)},
    signIn : (req :Request, res :Response) => { return UserAccountService.signIn(req,res)},
    getOneById: (req :Request, res :Response) => { return UserAccountService.getUserAccountById(req, res) },
    getOneByName : (req :Request, res :Response) => { return UserAccountService.getUserAccountByName(req, res) },
    create: (req :Request, res :Response) => { return UserAccountService.createUserAccount(req, res)},
    updateById: (req :Request, res :Response) => { return UserAccountService.updateUserAccountById(req, res)},
    updateByName: (req :Request, res :Response) => { return UserAccountService.updateUserAccountByName(req, res)},
    delete: (req :Request, res :Response) => { return UserAccountService.deleteUserAccount(req, res)},
}

export default userAccountController;