import Component from './component.js';


function createButtonClearComponentTemplate() {
    return (
        `<button class="tasks-item__button--clear">x Очистить</button>`
    );
}

export default class ButtonClearComponent extends Component {
    getTemplate() {
        return createButtonClearComponentTemplate();
    }
}