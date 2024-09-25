import AbstractComponent from '../framework/view/abstract-component.js';


function createButtonClearComponentTemplate() {
    return (
        `<button class="tasks-item__button--clear">x Очистить</button>`
    );
}

export default class ButtonClearComponent extends AbstractComponent {
    getTemplate() {
        return createButtonClearComponentTemplate();
    }
}