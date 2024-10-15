import {TaskListStatus, taskArea} from '../mock/task.js'
import {generateId} from '../utils.js'

export default class TasksModel {
    #tasks = taskArea;
    #observers = [];

    get tasks() {
        return this.#tasks;
    }

    addTask(task) {
        var newTask = {
            id: generateId(), 
            task: task,
        }
        this.#tasks[TaskListStatus.BACKLOG].items.push(newTask);
        
        this._notifyObservers();
    }

    removeTasksByStatus(taskListStatus) {
        this.#tasks[taskListStatus].items = [];
        
        this._notifyObservers();
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    removeObserver(observer) {
        this.#observers = this.#observers.filter((obs) => obs != observer);
    }

    _notifyObservers() {
        this.#observers.forEach((obs) => obs());
    }
}