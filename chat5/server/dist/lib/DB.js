"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class DB {
    constructor(type) {
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
            resolve(this.data);
        });
    }
    addElement(newElement) {
        return new Promise((resolve) => {
            if (this.type == 'item')
                this.data.push(newElement);
            else {
                // newElement.id = uuidv1();
                this.data[this.type].push(newElement);
            }
            this.writeToJson();
            resolve(this.data);
        });
    }
    updateElement(element) {
        return new Promise((resolve) => {
            const dataIndex = this.data[this.type].findIndex(u => u.id === element.id);
            this.data[this.type][dataIndex] = element;
            this.writeToJson();
            resolve(this.data);
        });
    }
    deleteElement(elementId) {
        return new Promise((resolve) => {
            const dataIndex = this.data[this.type].findIndex(u => u.id === (elementId));
            this.data[this.type].splice(dataIndex, 1);
            this.writeToJson();
            resolve(this.data);
        });
    }
}
exports.default = DB;
//# sourceMappingURL=DB.js.map