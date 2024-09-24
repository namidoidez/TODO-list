import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskAreaComponent from './view/task-area-component.js';
import TasksAreaPresenter from './presenter/task-area-presenter.js';
import TaskModel from './model/task-model.js'
import {render, RenderPosition} from './framework/render.js';


const bodyContainer= document.getElementsByTagName("body")[0];
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

const mainContainer = bodyContainer.getElementsByTagName("main")[0];
render(new FormAddTaskComponent(), mainContainer, RenderPosition.AFTERBEGIN);
render(new TaskAreaComponent(), mainContainer);

const taskAreaContainer = mainContainer.querySelector(".container");
const tasksModel = new TaskModel();
const taskAreaPresenter = new TasksAreaPresenter(tasksModel, taskAreaContainer);
taskAreaPresenter.init();