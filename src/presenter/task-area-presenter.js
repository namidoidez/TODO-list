import TaskAreaComponent from '../view/task-area-component.js';
import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import EmptyTaskComponent from '../view/empty-task-component.js';
import ButtonClearComponent from '../view/button-clear-component.js';
import {render} from '../framework/render.js';
import {TaskListStatus} from '../const.js';


export default class TaskAreaPresenter {
    #tasksModel = null;
    #taskAreaContainer = null;
    #taskAreaComponent = new TaskAreaComponent();
    #buttonClearComponent = new ButtonClearComponent(this.clearBasket.bind(this));

    constructor(tasksModel, mainContainer) {
        this.#tasksModel = tasksModel;
        this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
        
        render(this.#taskAreaComponent, mainContainer);
        this.#taskAreaContainer = mainContainer.querySelector('.container');
    }

    init() {
        this.#renderTaskArea();
    }

    createTask() {
        var taskTitle = document.querySelector('.new-task__input').value.trim();
        if (!taskTitle) {
            return;
        }
        this.#tasksModel.addTask(taskTitle);

        document.querySelector('.new-task__input').value = '';
    }

    clearBasket() {
        this.#tasksModel.removeTasksByStatus(TaskListStatus.BASKET);
        // this.#buttonClearComponent.element.disabled = true;
    }
    
    #renderTaskArea() {
        var taskListContainer = null;

        Object.values(TaskListStatus).forEach((taskListStatus, index) => {
            var taskListComponent = new TaskListComponent(taskListStatus, this.#handleTaskDrop.bind(this));
            render(taskListComponent, this.#taskAreaContainer);
            taskListContainer = this.#taskAreaContainer.querySelectorAll('.tasks__list')[index];
            
            var taskList = this.#tasksModel.getTasksByStatus(taskListStatus);
            if (taskList.length > 0) {    
                this.#renderTaskList(taskList, taskListContainer);
            }
            else {
                render(new EmptyTaskComponent(), taskListContainer);
            }
        });

        render(this.#buttonClearComponent, taskListContainer);
    }

    #renderTaskList(taskList, taskListContainer) {
        taskList.forEach((task) => {
            this.#renderTask(task, taskListContainer)
        }); 
    }

    #renderTask(task, container) {
        var taskComponent = new TaskComponent(task);
        render(taskComponent, container);
    }

    #clearTaskArea() {
        this.#taskAreaComponent.element.innerHTML = '';
    }

    #handleModelChange() {
        this.#clearTaskArea();
        this.#renderTaskArea();
    }

    #handleTaskDrop(taskId, targetTaskId, targetStatus) {
        if (targetTaskId != undefined && targetTaskId != null) {
            this.#tasksModel.moveTask(taskId, targetTaskId, targetStatus);
        }
        else {
            this.#tasksModel.moveTaskToEnd(taskId, targetStatus);
        }
    }
}