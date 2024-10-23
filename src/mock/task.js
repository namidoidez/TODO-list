import {generateId} from '../utils.js'


const TaskListStatus = {
    BACKLOG:   0,
    INPROCESS: 1,
    DONE:      2,
    BASKET:    3
};

var taskArea = [
    /* taskList */
    {
        id: TaskListStatus.BACKLOG,
        title: 'Бэклог',
        color: 'black',
        items: [
            {
                id: generateId(), 
                title: 'Выучить JS'
            },  
            {
                id: generateId(), 
                title: 'Выучить React'
            },
            {
                id: generateId(), 
                title: 'Сделать домашку'
            },
        ]
    },
    
    /* taskList */
    {
        id: TaskListStatus.INPROCESS,
        title: 'В процессе',
        color: 'royalblue',
        items: [ 
            {
                id: generateId(), 
                title: 'Выпить смузи'
            },
            {
                id: generateId(), 
                title: 'Попить воды'
            },
        ]
    },
    
    /* taskList */
    {
        id: TaskListStatus.DONE,
        title: 'Готово',
        color: 'green',
        items: [
            {
                id: generateId(), 
                title: 'Позвонить маме'
            },  
            {
                id: generateId(), 
                title: 'Погладить кота'
            },
        ]
    },
    
    /* taskList */
    {
        id: TaskListStatus.BASKET,
        title: 'Корзина',
        color: 'brown',
        items: [
            {
                id: generateId(), 
                title: 'Сходить погулять'
            },  
            {
                id: generateId(), 
                title: 'Прочитать Войну и Мир'
            },
        ]
    },
];

export {TaskListStatus, taskArea};