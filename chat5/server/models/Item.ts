import DB from "../lib/DB"


class Item{

     static async buildTree(){
        const items = await new DB('item').getCollection();
        const users = await new DB('users').getCollection();
        const groups = await new DB('groups').getCollection();

        const usersArr = users["users"];
        const groupsArr = groups["groups"];

        const itemsTree = this.magicTree(items,usersArr,groupsArr,null,null,null, null, null);
         return itemsTree
     }

    static magicTree(list:any, users:any, groups:any, idAttr:any, parentAttr:any, childrenAttr:any, messageAttr:any, nameAttr:any) {
        if (!idAttr) idAttr = 'id';
        if (!parentAttr) parentAttr = 'parent';
        if (!childrenAttr) childrenAttr = 'items';
        if (!messageAttr) messageAttr = 'message';
        if (!nameAttr) nameAttr = 'name';

        let treeList = [];
        let lookup = {};
        list.forEach(function(obj) {
            lookup[obj[idAttr]] = obj;
            obj[childrenAttr] = [];

            if(obj.type === "group"){
                const groupIndex = groups.findIndex((group)=>group.id===obj.id);
                obj[nameAttr] = groups[groupIndex].groupName;
                obj[messageAttr] = groups[groupIndex].massages;
            }
            else{
                const groupIndex = users.findIndex((user)=>user.id===obj.id);
                obj[nameAttr] = groups[groupIndex].username;
            }
        });
        list.forEach(function(obj) {
            if (obj[parentAttr] != null) {
                lookup[obj[parentAttr]][childrenAttr].push(obj);
            } else {
                treeList.push(obj);
            }
        });
        return treeList;
    };

}

export default Item;
