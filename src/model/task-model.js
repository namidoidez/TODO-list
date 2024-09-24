import {taskArea} from '../mock/task.js'

export default class TaskModel {
    tasks = taskArea;

    getTasks() {
        return this.tasks;
    }
}