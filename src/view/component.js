import {createElement} from '../framework/render.js';


export default class Component {
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