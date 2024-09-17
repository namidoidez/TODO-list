import Component from './component.js';


function createTaskListComponentTemplate(taskListName, taskColor) {
    if (!taskListName)
        taskListName = `Название блока`;
    if (!taskColor)
        taskListName = `black`;

    return (
        `<section class="tasks">
            <h3 class="tasks__title tasks__title--${taskColor}">${taskListName}</h3>
            <ul class="tasks__list">
            </ul>
        </section>`
    );
}

export default class TaskListComponent extends Component {
    constructor(taskListName = `Название блока`, taskColor = `black`) {
        super();
        this.taskListName = taskListName;
        this.taskColor = taskColor;
    }
    
    getTemplate() {
        return createTaskListComponentTemplate(this.taskListName, this.taskColor);
    }
}