import Component from './component.js';


function createTaskListComponentTemplate(taskListTitle, taskColor) {
    return (
        `<section class="tasks">
            <h3 class="tasks__title tasks__title--${taskColor}">${taskListTitle}</h3>
            <ul class="tasks__list">
            </ul>
        </section>`
    );
}

export default class TaskListComponent extends Component {
    constructor(taskListTitle = `Название блока`, taskColor = `black`) {
        super();
        this.taskListTitle = taskListTitle;
        this.taskColor = taskColor;
    }
    
    getTemplate() {
        return createTaskListComponentTemplate(this.taskListTitle, this.taskColor);
    }
}