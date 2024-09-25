import {createElement} from '../render.js';


export default class AbstractComponent {
    constructor() {
        
    }

    getTemplate() {
        
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}