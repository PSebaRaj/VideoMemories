import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

function requireUser(req: Request, res: Response, next: NextFunction) {
    // assumes deserializeUser will always be run before
    //const user = req.user;
    const user = res.locals.user;

    if (!user) {
        return res.sendStatus(StatusCodes.FORBIDDEN);
    }
    return next();
}

export default requireUser;
