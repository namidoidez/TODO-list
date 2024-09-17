const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',  // Перед самим элементом targetElement
    AFTERBEGIN: 'afterbegin',    // Внутри элемента targetElement, перед его первым потомком
    BEFOREEND: 'beforeend',      // Внутри элемента targetElement, после его последнего потомка
    AFTEREND: 'afterend',        // После самого элемента targetElement
};

function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    
    return newElement.firstElementChild;
}

function render(component, container, place = RenderPosition.BEFOREEND) {
    container.insertAdjacentElement(place, component.getElement());
}

export {RenderPosition, createElement, render};