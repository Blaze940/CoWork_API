import {NextFunction,Request, Response} from "express";
import jsonwebtoken from "jsonwebtoken";
import UserRole from "../enums/UserRole";
import {User} from "../types/user";

const UserMiddleware = {
    isAuthenticated: (req: Request, res: Response, next: NextFunction) => {

            if (req.headers.authorization) {

                const token = req.headers.authorization.split(" ")[1];

                if (UserMiddleware.isValidToken(token)) {

                    const user = jsonwebtoken.decode(token) as User;

                    req.user = user;

                    return next();
                }
            }
            return res.status(401).json({message: "Unauthorized"});
    },
    isValidToken: (token: string) => {
        try {
            jsonwebtoken.verify(token, process.env.JWT_SECRET || 'secret');
            return true;
        }catch (err){
            return false;
        }
    },
    isAdmin: (req: Request, res: Response, next: NextFunction) => {
        if(req.user && req.user.role === UserRole.ADMIN){
                return next();
        }
        return res.status(403).json({ message: 'Forbidden'}) ;
    },
    isClient: (req: Request, res: Response, next: NextFunction) => {
        if(req.user && (req.user.role === UserRole.CLIENT || req.user.role === UserRole.ADMIN)){
            return next();
        }
        return res.status(403).json({message: 'Forbidden'});
    }
}

export default UserMiddleware;




