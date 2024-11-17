import AbstractComponent from '../framework/view/abstract-component.js';
import {TaskListColor} from '../const.js';


function createTaskComponentTemplate(id, title, color) {
    return (
        `<li class="tasks__item tasks__item--${color}" data-taskid="${id}">${title}</li>`
    );
}

export default class TaskComponent extends AbstractComponent {
    id = null;
    title = null;
    color = null;
    
    constructor(task) {
        super();
        this.id = task.id;
        this.title = task.title;
        this.color = TaskListColor[task.status];
        this.#afterCreateElement();
    }

    get template() {
        return createTaskComponentTemplate(this.id, this.title, this.color);
    }

    #afterCreateElement() {
        this.#makeTaskDraggable();
    }

    #makeTaskDraggable() {
        this.element.setAttribute('draggable', true);

        this.element.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', this.id);
        })
    }
}