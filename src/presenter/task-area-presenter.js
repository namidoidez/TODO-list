import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskAreaComponent from '../view/task-area-component.js';
import ButtonClearComponent from '../view/button-clear-component.js';
import {render} from '../framework/render.js';


export default class TasksAreaPresenter {   
    constructor(taskModel, taskAreaContainer) {
        this.taskModel = taskModel;
        this.taskAreaContainer = taskAreaContainer;
    }

    init() {       
        var taskListContainer = null;
        this.taskModel.getTasks().forEach((taskList, index) => {
            var taskColor = taskList.color;
            var taskListComponent = new TaskListComponent(taskList.title, taskColor);
            render(taskListComponent, this.taskAreaContainer);

            taskListContainer = this.taskAreaContainer.querySelectorAll(".tasks__list")[index];
            taskList.items.forEach(item => {
                var taskComponent = new TaskComponent(item.task, taskColor);
                render(taskComponent, taskListContainer);
            });        
        });
        
        render(new ButtonClearComponent(), taskListContainer);
    }
}
