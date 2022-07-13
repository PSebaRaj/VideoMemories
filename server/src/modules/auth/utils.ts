import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "BEANZ";
const EXPIRES_IN = process.env.EXPIRES_IN || "3d";

export function signJWT(payload: string | Buffer | object) {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: EXPIRES_IN,
    });
}

export function verifyJWT(token: string) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (e) {
        return null;
    }
}
