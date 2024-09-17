import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskAreaComponent from './view/task-area-component.js';
import TaskListComponent from './view/task-list-component.js';
import TaskComponent from './view/task-component.js';
import {render, RenderPosition} from './framework/render.js';


const bodyContainer= document.getElementsByTagName("body")[0];
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

const mainContainer = bodyContainer.getElementsByTagName("main")[0];
render(new FormAddTaskComponent(), mainContainer, RenderPosition.AFTERBEGIN);
render(new TaskAreaComponent(), mainContainer);

const taskAreaContainer = mainContainer.querySelector(".container");
for (var i = 0; i < 4; ++i)
{
       render(new TaskListComponent(), taskAreaContainer);

       const taskLists = taskAreaContainer.querySelectorAll('.tasks__list');
       for (var j = 0; j < 3; ++j)
       {
              render(new TaskComponent(), taskLists[i]);
       }
}