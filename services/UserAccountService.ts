import {Request,Response} from "express";
import UserAccount from "../models/UserAccount";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
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
            const userAccount = await UserAccount.find({pseudo: req.params.pseudo});
            if (!userAccount) {
                return res.status(404).json({ message: "UserAccount with name : "+req.params.pseudo+" not found" });
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
            const userAccount = await UserAccount.findOneAndUpdate({pseudo: req.params.pseudo}, req.body, {
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
    },
    signUp : async (req: Request, res: Response) => {
        try {
            const userAccount = await UserAccount.create(
                {...req.body,
                    password: userAccountService.hashPassword(req.body.password)
                })
            return res.status(201).json(userAccount);
        } catch (error : any) {
            if (error.code === 11000) {
                // Object.keys(err.keyPattern)[0] returns the key of the duplicate field
                return res.status(400).json({
                    message: `There already exists a user with the ${Object.keys(error.keyValue)[0]}: ${
                        error.keyValue[Object.keys(error.keyValue)[0]]
                    }`,
                });
            }
            return res.status(500).json(error);
        }
    },
    signIn : async (req: Request, res: Response) => {
        try{
            const user = await UserAccount.findOne({email: req.body.email});
            if (!user) {
                return res.status(404).json({ message: "UserAccount not found" });
            }
            const isPasswordValid = await userAccountService.comparePassword(req.body.password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid password" });
            }
            const token = jsonwebtoken.sign({ id: user._id, role : user.role}, process.env.JWT_SECRET || 'secret', {
                expiresIn: 86400, // 24 hours
            });
            return res.status(200).json({ token });
        }catch(error){
            console.log(error);
            return res.status(500).json({message : "Server error -> " + error});
        }
    },
    hashPassword: (password: string): string => bcrypt.hashSync(password, 10),
    comparePassword: async (
        password: string,
        hashedPassword: string,
    ): Promise<boolean> => bcrypt.compare(password, hashedPassword)
};

export default userAccountService ;