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
    #buttonClearComponent = new ButtonClearComponent();

    constructor(tasksModel, mainContainer) {
        this.#tasksModel = tasksModel;
        this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
        
        render(this.#taskAreaComponent, mainContainer);
        this.#taskAreaContainer = mainContainer.querySelector('.container');
    }

    #handleModelChange() {
        this.#clearTaskArea();
        this.#renderTaskArea();
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

            if (taskList.items.length > 0) {    
                this.#renderTaskList(taskList.items, taskColor, taskListContainer);
            }
            else {
                render(this.#emptyTaskComponent, taskListContainer);
            }
        });

        render(this.#buttonClearComponent, taskListContainer);
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

    createTask() {
        var task = document.querySelector('.new-task__input').value.trim();
        
        if (!task) {
            return;
        }
        this.#tasksModel.addTask(task);

        document.querySelector('.new-task__input').value = '';
    }

    #clearTaskArea() {
        this.#taskAreaComponent.element.innerHTML = '';
    }
}