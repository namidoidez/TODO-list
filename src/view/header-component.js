import Component from './component.js';


function createHeaderComponentTemplate() {
    return (
        `<header>
            <h1>Список задач</h1>
        </header>`
    );
}

export default class HeaderComponent extends Component {
    getTemplate() {
        return createHeaderComponentTemplate();
    }
}