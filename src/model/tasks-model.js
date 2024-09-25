import {taskArea} from '../mock/task.js'

export default class TasksModel {
    #tasks = taskArea;

    get tasks() {
        return this.#tasks;
    }
}