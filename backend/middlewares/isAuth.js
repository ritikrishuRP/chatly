import jwt from "jsonwebtoken";

const isAuth= async (req, res, next) => {
    try {
        let token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ message: "token is not found" });
        }

        let verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            return res.status(401).json({ message: "token is not verified" });
        }

        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default isAuth;