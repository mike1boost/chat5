import * as models from "../models"

class GroupsService {
    static getItems () {
        return new Promise((resolve, reject) => {
            resolve(models.ItemModel.buildTree());
        })
    }

    static async addMessage(groupId: string, message: any){
        return await models.GroupModel.addMessage(groupId, message);
    }

    static async addItem(groupId: string, userId: string){
        await models.GroupModel.addItem(groupId, userId);
        return await models.ItemModel.buildTree();
    }

    static getAllGroups () {
        return new Promise((resolve, reject) => {
            resolve(models.GroupModel.getGroups());
        })
    }

    static createGroup (group:any) {
        return new Promise((resolve, reject) => {
            if(!group) {reject('group required')}
            resolve(models.GroupModel.createGroup(group));
        })
    }

    static updateGroup(group:any) {
        return new Promise((resolve, reject) => {
            if(!group) {reject('group required')}
            resolve(models.GroupModel.updateGroup(group));
        })
    }

    static deleteGroup (groupId:any) {
        return new Promise((resolve, reject) => {
            if(!groupId) {reject('group id is required')}
            resolve(models.GroupModel.deleteGroup(groupId));
        })
    }
}

export default GroupsService