import AbstractComponent from '../framework/view/abstract-component.js';


function createTaskComponentTemplate(taskId, taskTitle, taskColor) {
    return (
        `<li class="tasks__item tasks__item--${taskColor}" data-taskid="${taskId}">${taskTitle}</li>`
    );
}

export default class TaskComponent extends AbstractComponent {
    taskId = null;
    taskTitle = null;
    taskColor = null;
    
    constructor(task, taskColor = 'black', taskListId) {
        super();
        this.taskId = task.id;
        this.taskTitle = task.title;
        this.taskColor = taskColor;
        this.#afterCreateElement(task, taskListId);
    }

    get template() {
        return createTaskComponentTemplate(this.taskId, this.taskTitle, this.taskColor);
    }

    #afterCreateElement(task, taskListId) {
        this.#makeTaskDraggable(task, taskListId);
    }

    #makeTaskDraggable(task, taskListId) {
        this.element.setAttribute('draggable', true);

        this.element.addEventListener('dragstart', (event) => {           
            var taskData = {task: task, taskListId: taskListId};
            taskData = JSON.stringify(taskData);
            event.dataTransfer.setData('text/plain', taskData);
        })
    }
}