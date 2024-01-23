import {promises as fs} from 'fs';
import { userMessage } from './types';

const fileName = './db.json';
let data: userMessage[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(fileName);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },
  async getItems() {
    return data
  },
  async addItem(item: userMessage) {
    data.push(item);
    await this.save();

    return item;
  },

  async save() {
    return fs.writeFile(fileName, JSON.stringify(data));
  }
};

export default fileDb;

