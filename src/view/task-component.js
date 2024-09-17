import Component from './component.js';


function createTaskComponentTemplate(task, taskColor) {
    if (!task)
        taskListName = `Название задачи`;
    if (!taskColor)
        taskListName = `black`;
    
    return (
        `<li class="tasks__item tasks__item--${taskColor}">${task}</li>`
    );
}

export default class TaskComponent extends Component {
    constructor(task = `Название задачи`, taskColor = `black`) {
        super();
        this.task = task;
        this.taskColor = taskColor;
    }

    getTemplate() {
        return createTaskComponentTemplate(this.task, this.taskColor);
    }
}