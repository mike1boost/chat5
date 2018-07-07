import DB from "../lib/DB"

class Group {
    public id: string;
    public groupName: string;
    public messages: Array<string>;

    constructor(id, groupName, massages) {
        this.id = id;
        this.groupName = groupName;
        this.messages = massages;
    }

    static async addMessage(groupId: string, message: any){
        try {
            const groups = await new DB('groups').getCollection();
            const groupIndex = Number(groupId) - 1;
            const updatedGroup = groups['groups'][groupIndex];
            updatedGroup.messages.push(message);
            return await new DB('groups').updateElement(updatedGroup);
        }
        catch (e){
            alert(`Bad fetch ${e}`);
        }
    }

    static async addItem(groupId: string, userId: string){
        try {
            let newItem = {
                id: userId,
                parent: groupId,
                type: "user"
            };
            return await new DB('item').addElement(newItem);
        }
        catch(e){
            alert(`Bad fetch ${e}`);
        }
    }

    static async getGroups() {
        try {
            const groups = await new DB('groups').getCollection();

            return groups['groups'].map((group) => {
                return new Group(group.id, group.groupName, group.massages)});
        } catch (e) {
            alert(`Bad fetch ${e}`);
        }
    }

    static async createGroup(newGroup:any) {
        try {
            const status = await new DB('groups').addElement(newGroup);
            return status;

        } catch (e) {
            alert(`Bad fetch ${e}`);
        }
    }

    static async updateGroup(updateGroup:any) {
        try {
            const status = await new DB('groups').updateElement(updateGroup);
            return status;

        } catch (e) {
            alert(`Bad fetch ${e}`);
        }
    }

    static async deleteGroup(groupId:any) {
        try {
            const status = await new DB('groups').deleteElement(groupId);
            return status;

        } catch (e) {
            alert(`Bad fetch ${e}`);
        }
    }
}

export default Group;
