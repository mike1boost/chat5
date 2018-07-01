import DB from "../lib/DB"

class Group {
    public id: string;
    public groupName: string;
    public massages: Array<string>;

    constructor(id, groupName, massages) {
        this.id = id;
        this.groupName = groupName;
        this.massages = massages;
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
