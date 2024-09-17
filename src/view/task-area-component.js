import Component from './component.js';


function createTaskAreaComponentTemplate() {
    return (
        `<section class="container">
        </section>`
    );
}

export default class TaskAreaComponent extends Component {
    getTemplate() {
        return createTaskAreaComponentTemplate();
    }
}