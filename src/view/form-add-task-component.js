import AbstractComponent from '../framework/view/abstract-component.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<section class="new-task">
            <h2 class="new-task__title">Новая задача</h2>
            
            <input class="new-task__input" type="text" placeholder="Название задачи...">
            <button class="new-task__button">+ Добавить</button>
        </section>`
    );
}

export default class FormAddTaskComponent extends AbstractComponent {
    getTemplate() {
        return createFormAddTaskComponentTemplate();
    }
}