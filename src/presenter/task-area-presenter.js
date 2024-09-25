import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import ButtonClearComponent from '../view/button-clear-component.js';
import {render} from '../framework/render.js';


export default class TaskAreaPresenter {
    #tasksModel = null;
    #taskArea = null;
    #taskAreaContainer = null;

    constructor(tasksModel, taskAreaContainer) {
        this.#tasksModel = tasksModel;
        this.#taskAreaContainer = taskAreaContainer;
    }

    init() {
        this.#taskArea = this.#tasksModel.tasks;
        this.#renderTaskArea();
    }
    
    #renderTaskArea() {
        var taskListContainer = null;

        this.#taskArea.forEach((taskList, index) => {
            var taskColor = taskList.color;
            var taskListComponent = new TaskListComponent(taskList.title, taskColor);
            render(taskListComponent, this.#taskAreaContainer);
            
            taskListContainer = this.#taskAreaContainer.querySelectorAll('.tasks__list')[index];
            this.#renderTaskList(taskList.items, taskColor, taskListContainer);
        });
            
        render(new ButtonClearComponent(), taskListContainer);
    }

    #renderTaskList(taskList, taskColor, taskListContainer) {
        taskList.forEach(item => {
            this.#renderTask(item.task, taskColor, taskListContainer)
        }); 
    }

    #renderTask(task, taskColor, container) {
        var taskComponent = new TaskComponent(task, taskColor);
        render(taskComponent, container);
    }
}