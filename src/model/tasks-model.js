import {TaskListStatus, taskArea} from '../mock/task.js'
import {generateId} from '../utils.js'


export default class TasksModel {
    #tasks = taskArea;
    #observers = [];

    get tasks() {
        return this.#tasks;
    } 

    addTask(taskTitle) {
        var newTask = {
            id: generateId(), 
            title: taskTitle
        }
        this.#tasks[TaskListStatus.BACKLOG].items.push(newTask);
        
        this._notifyObservers();
    }

    moveTaskToEnd(task, oldTaskStatus, newTaskStatus) {
        var index = this.#tasks[oldTaskStatus].items.findIndex(t => t.id == task.id);

        if (index != -1) { 
            this.#tasks[oldTaskStatus].items.splice(index, 1);
            this.#tasks[newTaskStatus].items.push(task);

            this._notifyObservers();
        }
    }
    
    moveTask(task, oldTaskStatus, newTaskStatus, targetTaskId) { 
        var currentTaskIndex = this.#tasks[oldTaskStatus].items.findIndex(t => t.id == task.id);
        var targetTaskIndex = this.#tasks[newTaskStatus].items.findIndex(t => t.id == targetTaskId);
        
        if (currentTaskIndex != -1 && targetTaskIndex != -1) { 
            this.#tasks[oldTaskStatus].items.splice(currentTaskIndex, 1);
            this.#tasks[newTaskStatus].items.splice(targetTaskIndex, 0, task);
            
            this._notifyObservers();
        }
        else {
            this.moveTaskToEnd(task, oldTaskStatus, newTaskStatus);
        }
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