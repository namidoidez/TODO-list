import AbstractComponent from '../framework/view/abstract-component.js';


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
    constructor(taskListTitle = 'Название блока', taskColor = 'black') {
        super();
        this.taskListTitle = taskListTitle;
        this.taskColor = taskColor;
    }
    
    get template() {
        return createTaskListComponentTemplate(this.taskListTitle, this.taskColor);
    }
}