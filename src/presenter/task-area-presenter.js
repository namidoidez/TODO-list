import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskAreaComponent from '../view/task-area-component.js';
import ButtonClearComponent from '../view/button-clear-component.js';
import {render} from '../framework/render.js';


export default class TasksAreaPresenter {
    taskAreaComponent = new TaskAreaComponent();
    
    constructor(taskModel, taskAreaContainer) {
        this.taskModel = taskModel;
        this.taskAreaContainer = taskAreaContainer;
    }

    init() {
        render(this.taskAreaComponent, this.taskAreaContainer);
        
        var taskListContainer = null;
        this.taskModel.getTasks().forEach((taskList) => {
            var taskColor = taskList.color;
            var taskListComponent = new TaskListComponent(taskList.title, taskColor);
            render(taskListComponent, this.taskAreaContainer);

            taskListContainer = taskListComponent.getElement();
            taskList.items.forEach(item => {
                var taskComponent = new TaskComponent(item.task, taskColor);
                render(taskComponent, taskListContainer);
            });        
        });
        
        render(new ButtonClearComponent(), taskListContainer);
    }
}