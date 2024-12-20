import AbstractComponent from '../framework/view/abstract-component.js';
import {TaskListTitle, TaskListColor} from '../const.js'


function createTaskListComponentTemplate(title, color) {
    return (
        `<section class="tasks">
            <h3 class="tasks__title tasks__title--${color}">${title}</h3>
            <ul class="tasks__list">
            </ul>
        </section>`
    );
}

export default class TaskListComponent extends AbstractComponent {
    status = null;
    title = null;
    color = null;
    
    constructor(status, onTaskDrop) {
        super();
        this.status = status;
        this.title = TaskListTitle[status];
        this.color = TaskListColor[status];
        this.#setDropHandler(onTaskDrop);
    }
    
    get template() {
        return createTaskListComponentTemplate(this.title, this.color);
    }

    #setDropHandler(onTaskDrop) {
        var container = this.element;

        container.addEventListener('dragover', (event) => {
            event.preventDefault();
        })

        container.addEventListener('drop', (event) => {
            event.preventDefault();

            var taskId = event.dataTransfer.getData('text/plain');
            var targetTask = event.target.closest('.tasks__item');
            var targetTaskId = targetTask?.dataset.taskid;
            onTaskDrop(taskId, targetTaskId, this.status);
        })
    }
}