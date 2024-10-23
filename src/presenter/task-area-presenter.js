import TaskAreaComponent from '../view/task-area-component.js';
import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import EmptyTaskComponent from '../view/empty-task-component.js';
import ButtonClearComponent from '../view/button-clear-component.js';
import {render} from '../framework/render.js';
import {TaskListStatus} from '../mock/task.js';


export default class TaskAreaPresenter {
    #tasksModel = null;
    #taskArea = null;
    #taskAreaContainer = null;
    #taskAreaComponent = new TaskAreaComponent();
    #emptyTaskComponent = new EmptyTaskComponent();
    #buttonClearComponent = new ButtonClearComponent(this.clearBasket.bind(this));

    constructor(tasksModel, mainContainer) {
        this.#tasksModel = tasksModel;
        this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
        
        render(this.#taskAreaComponent, mainContainer);
        this.#taskAreaContainer = mainContainer.querySelector('.container');
    }

    init() {
        this.#taskArea = this.#tasksModel.tasks;
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
        this.#buttonClearComponent.element.disabled = true;
    }
    
    #renderTaskArea() {
        var taskListContainer = null;

        this.#taskArea.forEach((taskList, index) => {
            var taskListComponent = new TaskListComponent(taskList, this.#handleTaskDrop.bind(this));
            render(taskListComponent, this.#taskAreaContainer);
            
            taskListContainer = this.#taskAreaContainer.querySelectorAll('.tasks__list')[index];

            if (taskList.items.length > 0) {    
                this.#renderTaskList(taskList, taskListContainer);
            }
            else {
                render(this.#emptyTaskComponent, taskListContainer);
            }
        });

        render(this.#buttonClearComponent, taskListContainer);
    }

    #renderTaskList(taskList, taskListContainer) {
        taskList.items.forEach(task => {
            this.#renderTask(task, taskList.color, taskList.id, taskListContainer)
        }); 
    }

    #renderTask(task, taskColor, taskListId, container) {
        var taskComponent = new TaskComponent(task, taskColor, taskListId);
        render(taskComponent, container);
    }

    #clearTaskArea() {
        this.#taskAreaComponent.element.innerHTML = '';
    }

    #handleModelChange() {
        this.#clearTaskArea();
        this.#renderTaskArea();
    }

    #handleTaskDrop(task, oldTaskStatus, newTaskStatus, targetTaskId) {
        if (targetTaskId != undefined && targetTaskId != null) {
            this.#tasksModel.moveTask(task, oldTaskStatus, newTaskStatus, targetTaskId);
        }
        else {
            this.#tasksModel.moveTaskToEnd(task, oldTaskStatus, newTaskStatus);
        }
    }
}