const TaskListStatus = {
    BACKLOG:   0,
    INPROCESS: 1,
    DONE:      2,
    BASKET:    3
};

const TaskListTitle = {
    [TaskListStatus.BACKLOG]:   `Бэклог`,
    [TaskListStatus.INPROCESS]: `В процессе`,
    [TaskListStatus.DONE]:      `Готово`,
    [TaskListStatus.BASKET]:    `Корзина`,
};

const TaskListColor = {
    [TaskListStatus.BACKLOG]:   `black`,
    [TaskListStatus.INPROCESS]: `royalblue`,
    [TaskListStatus.DONE]:      `green`,
    [TaskListStatus.BASKET]:    `brown`,
};

export {TaskListStatus, TaskListTitle, TaskListColor};