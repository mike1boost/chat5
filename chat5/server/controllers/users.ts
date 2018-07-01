import {Request, Response} from 'express';

import * as services from "../services"

class UserController {

    static async getAllUsers(req: Request, res: Response) {
        try {
            const serviceResult = await
                services.UsersService.getAllUsers();

            res.status(200).json(serviceResult);
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }

    static async createUser(req: Request, res: Response) {
        try {
            const user = req.body;
            const serviceResult = await
                services.UsersService.createUser(user);

            res.status(200).json(serviceResult);
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
            const user = req.body;
            const serviceResult = await
                services.UsersService.updateUser(user);

            res.status(200).json(serviceResult);
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }

    static async deleteUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const serviceResult = await
                services.UsersService.deleteUser(userId);

            res.status(200).json(serviceResult);
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }
}

export default UserController

