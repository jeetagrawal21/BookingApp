import jwt from "jsonwebtoken"
import { createError } from "./error.js"

// Verifies the token that was created in the login function
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    // This means that no token was provided to the user
    if(!token){
        return next(createError(401,"You are not authenticated."));
    }
    
    // This is to verify the token that was created in the login function
    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err){
            return next(createError(403, "Invalid token."));
        }
        req.user = user;
        next();
    });
};


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not authorized to do that."));
        }
    });
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not authorized to do that."));
        }
    });
}