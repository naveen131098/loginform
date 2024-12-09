import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid Token' });
        req.body.userId = (decoded as any).id;
        next();
    });
};
