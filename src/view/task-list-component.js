import AbstractComponent from '../framework/view/abstract-component.js';
import {generateId} from '../utils.js';


function createTaskListComponentTemplate(taskListTitle, taskColor) {
    return (
        `<section class="tasks">
            <h3 class="tasks__title tasks__title--${taskColor}">${taskListTitle}</h3>
            <ul class="tasks__list">
            </ul>
        </section>`
    );
}

export default class TaskListComponent extends AbstractComponent {
    taskListTitle = null;
    taskListColor = null;
    
    constructor(taskList, onTaskDrop) {
        super();
        this.taskListTitle = taskList.title;
        this.taskListColor = taskList.color;
        this.#setDropHandler(onTaskDrop, taskList);
    }
    
    get template() {
        return createTaskListComponentTemplate(this.taskListTitle, this.taskListColor);
    }

    #setDropHandler(onTaskDrop, taskList) {
        var container = this.element;

        container.addEventListener('dragover', (event) => {
            event.preventDefault();
        })

        container.addEventListener('drop', (event) => {
            event.preventDefault();

            var taskData = event.dataTransfer.getData('text/plain');
            taskData = JSON.parse(taskData);
            var targetTask = event.target.closest('.tasks__item');
            var targetTaskId = targetTask?.dataset.taskid;
            onTaskDrop(taskData.task, taskData.taskListId, taskList.id, targetTaskId);
        })
    }
}