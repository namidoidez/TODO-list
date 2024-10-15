import {generateId} from '../utils.js'


const TaskListStatus = {
    BACKLOG:   0,
    INPROCESS: 1,
    DONE:      2,
    BASKET:    3,
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
                task: 'Выучить JS',
            },  
            {
                id: generateId(), 
                task: 'Выучить React',
            },
            {
                id: generateId(), 
                task: 'Сделать домашку',
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
                task: 'Выпить смузи',
            },
            {
                id: generateId(), 
                task: 'Попить воды',
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
                task: 'Позвонить маме',
            },  
            {
                id: generateId(), 
                task: 'Погладить кота',
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
                task: 'Сходить погулять',
            },  
            {
                id: generateId(), 
                task: 'Прочитать Войну и Мир',
            },
        ]
    },
];

export {TaskListStatus, taskArea};