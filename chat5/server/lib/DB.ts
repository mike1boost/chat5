import * as fs from 'fs';
import * as uuidv1 from 'uuid/v1'

class DB {

    type: string;
    data: object;

    constructor(type:string) {
        this.type = type;
        this.data = this.readFromJson();
    }

    readFromJson() {
        const buffer = fs.readFileSync(`../${this.type}.json`);
        const data = buffer.toString();
        return JSON.parse(data);
    }

    writeToJson() {
        fs.writeFileSync(`../${this.type}.json`, JSON.stringify(this.data));
    }

    getCollection() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 100);
        });
    }

    addElement(newElement) {
        return new Promise((resolve) => {
            setTimeout(() => {
                newElement.id = uuidv1();
                this.data[this.type].push(newElement);
                this.writeToJson();
                resolve(this.data);
            }, 100);
        });
    }

    updateElement(element) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const userIndex = this.data[this.type].findIndex(u => u.id === element.id);
                this.data[this.type][userIndex] = element;
                this.writeToJson();
                resolve(this.data);
            }, 100);
        });
    }

    deleteElement(elementId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const userIndex = this.data[this.type].findIndex(u => u.id === (elementId));
                this.data[this.type].splice(userIndex, 1);
                this.writeToJson();
                resolve(this.data);
            }, 100);
        });
    }
}

export default DB;