import AbstractComponent from '../framework/view/abstract-component.js';


function createTaskComponentTemplate(task, taskColor) {
    return (
        `<li class="tasks__item tasks__item--${taskColor}">${task}</li>`
    );
}

export default class TaskComponent extends AbstractComponent {
    constructor(task = 'Название задачи', taskColor = 'black') {
        super();
        this.task = task;
        this.taskColor = taskColor;
    }

    get template() {
        return createTaskComponentTemplate(this.task, this.taskColor);
    }
}