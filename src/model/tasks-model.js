import {taskArea} from '../mock/task.js'
import {generateId} from '../utils.js'
import {TaskListStatus} from '../const.js'


export default class TasksModel {
    #tasks = taskArea;
    #observers = [];

    get tasks() {
        return this.#tasks;
    } 

    addTask(taskTitle) {
        var newTask = {
            id: generateId(), 
            title: taskTitle,
            status: TaskListStatus.BACKLOG
        };
        this.#tasks.push(newTask);
        
        this._notifyObservers();
    }

    moveTaskToEnd(taskId, targetStatus) {
        var taskIndex = this.#tasks.findIndex((task) => task.id == taskId);
        var task = this.#tasks.splice(taskIndex, 1)[0];
        task.status = targetStatus;
        this.#tasks.push(task);

        this._notifyObservers();
    }
    
    moveTask(taskId, targetTaskId, targetStatus) { 
        var currentTaskIndex = this.#tasks.findIndex((task) => task.id == taskId);
        var targetTaskIndex = this.#tasks.findIndex((task) => task.id == targetTaskId);
        
        var currentTask = this.#tasks.splice(currentTaskIndex, 1)[0];
        currentTask.status = targetStatus;
        this.#tasks.splice(targetTaskIndex, 0, currentTask);
        
        this._notifyObservers();
    }

    getTasksByStatus(taskListStatus) {
        return this.#tasks.filter((task) => task.status == taskListStatus);
    }

    removeTasksByStatus(taskListStatus) {
        var tasks = this.getTasksByStatus(taskListStatus);
        tasks.forEach((task) => {
            this.removeTask(task);
        })
        
        this._notifyObservers();
    }

    removeTask(task) {
        var taskIndex = this.#tasks.indexOf(task);
        this.#tasks.splice(taskIndex, 1);
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