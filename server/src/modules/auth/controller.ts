import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { findUserByEmail } from "../user/service";
import { signJWT } from "./utils";
import omit from "../../helpers/omit";
import { LoginBody } from "./schema";

export async function loginHandler(
    req: Request<{}, {}, LoginBody>,
    res: Response
) {
    const { email, password } = req.body;

    // check if user exists
    const user = await findUserByEmail(email);

    // if credentials don't match or user doesn't exist
    if (!user || !user.comparePassword(password)) {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .send("Invalid email or password");
    }

    const payload = omit(user.toJSON(), ["password", "__v"]);

    const jwt = signJWT(payload);
    res.cookie("accessToken", jwt, {
        maxAge: 3.154e10, // 1 year
        httpOnly: true,
        domain: "localhost", // change before production
        path: "/",
        sameSite: "strict",
        secure: false, // change before production
    });

    return res.status(StatusCodes.OK).send(jwt);
}
