import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: AngularFireList<any>;
  selectedTodo: Todo = new Todo();

  constructor(private firebase: AngularFireDatabase) { }

  getTodos() {
    this.todoList = this.firebase.list('todos');
    return this.todoList;
  }

  insertTodo(todo: Todo) {
    this.todoList = this.firebase.list('todos');
    this.todoList.push({
      done: todo.done,
      text: todo.text
    });
  }

  updateTodo(todo: Todo) {
    this.todoList.update(todo.$key, {
      done: todo.done,
      text: todo.text
    });
  }

  deleteTodo($key: string) {
    this.todoList.remove($key);
  }

}
