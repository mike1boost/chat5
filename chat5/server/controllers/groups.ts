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

    static async addItem(req: Request, res: Response){
        try{
            const groupId = req.body.groupId;
            const userId = req.body.userId;
            const serviceResult = await
                services.GroupsService.addItem(groupId, userId);
            res.status(200).json(serviceResult)
        }
        catch (e){
            res.status(500).json(`Bad request ${e}`)
        }
    }

    static async addMessage(req: Request, res: Response){
        try{
            const groupId = req.body.id;
            const message = req.body.msg;
            const serviceResult = await
                services.GroupsService.addMessage(groupId, message);
            res.status(200).json(serviceResult)
        }
        catch (e){
            res.status(500).send(`Bad request ${e}`)
        }
    }

    static async getAllGroups(req: Request, res: Response) {
        try {
            const serviceResult = await
                services.GroupsService.getAllGroups();

            res.status(200).json(serviceResult);
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

            res.status(200).json(serviceResult);
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

            res.status(200).json(serviceResult);
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

            res.status(200).json(serviceResult);
        }
        catch (e) {
            res.status(500).send(`Bad request ${e}`)
        }
    }
}

export default GroupController

