import {generateId} from '../utils.js'
import {TaskListStatus} from '../const.js'


export var taskArea = [
    /* taskList */
    {
        id: generateId(),
        title: 'Выучить JS',
        status: TaskListStatus.BACKLOG
    },
    {
        id: generateId(),
        title: 'Выучить React',
        status: TaskListStatus.BACKLOG
    },
    {
        id: generateId(),
        title: 'Сделать домашку',
        status: TaskListStatus.BACKLOG
    },
    {
        id: generateId(),
        title: 'Выпить смузи',
        status: TaskListStatus.INPROCESS
    },
    {
        id: generateId(),
        title: 'Попить воды',
        status: TaskListStatus.INPROCESS
    },
    {
        id: generateId(),
        title: 'Позвонить маме',
        status: TaskListStatus.DONE
    },
    {
        id: generateId(),
        title: 'Погладить кота',
        status: TaskListStatus.DONE
    },
    {
        id: generateId(),
        title: 'Сходить погулять',
        status: TaskListStatus.BASKET
    },
    {
        id: generateId(),
        title: 'Прочитать Войну и Мир',
        status: TaskListStatus.BASKET
    }
];