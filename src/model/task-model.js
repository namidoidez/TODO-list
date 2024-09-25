import {taskArea} from '../mock/task.js'

export default class TaskModel {
    #tasks = taskArea;

    get tasks() {
        return this.#tasks;
    }
}