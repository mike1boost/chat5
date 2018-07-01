import {Request, Response} from 'express';

import * as services from "../services"

class GroupController {

    static async getItems(req: Request, res: Response) {
        try {
            const serviceResult = await
                services.GroupsService.getItems();

            res.status(200).json(serviceResult);
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }

    static async getAllGroups(req: Request, res: Response) {
        try {
            const serviceResult = await
                services.GroupsService.getAllGroups();

            res.status(200).json({groups: serviceResult});
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }

    static async createGroup(req: Request, res: Response) {
        try {
            const group = req.body;
            const serviceResult = await
                services.GroupsService.createGroup(group);

            res.status(200).json({group: serviceResult});
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }

    static async updateGroup(req: Request, res: Response) {
        try {
            const group = req.body;
            const serviceResult = await
                services.GroupsService.updateGroup(group);

            res.status(200).json({group: serviceResult});
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }

    static async deleteGroup(req: Request, res: Response) {
        try {
            const groupId = req.params.id;
            const serviceResult = await
                services.GroupsService.deleteGroup(groupId);

            res.status(200).json({group: serviceResult});
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }
}

export default GroupController

