import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({message: "Token não fornecido"});
    }
    
    const [, token] = authHeader.split(" ");

    try {    
        const tokenPayload = jwt.verify(token, JWT_SECRET);
        req.usuario = tokenPayload;
        next();
    } catch (error) {
        res.status(401).json({message: "Token expirado ou inválido."});
    }

}

export default authMiddleware;