import './styles.css';


import {Todo, TodoList} from './clases';
import {crearTodoHtml} from './js/componentes';

//const tarea = new Todo('Aprender Javascript!!');


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log(todoList.todos);

todoList.todos[0].imprimirInfo();

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);


