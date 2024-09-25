import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskAreaComponent from './view/task-area-component.js';
import TaskAreaPresenter from './presenter/task-area-presenter.js';
import TasksModel from './model/tasks-model.js'
import {render, RenderPosition} from './framework/render.js';


const bodyContainer= document.getElementsByTagName("body")[0];
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

const mainContainer = bodyContainer.getElementsByTagName("main")[0];
render(new FormAddTaskComponent(), mainContainer, RenderPosition.AFTERBEGIN);
render(new TaskAreaComponent(), mainContainer);

const taskAreaContainer = mainContainer.querySelector(".container");
const tasksModel = new TasksModel();
const taskAreaPresenter = new TaskAreaPresenter(tasksModel, taskAreaContainer);
taskAreaPresenter.init();