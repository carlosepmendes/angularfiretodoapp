import { Todo } from './todo.model';
import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase} from 'angularfire2/database';
import { FirebaseDatabase } from '@firebase/database-types';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: AngularFireList<any>;
  selectedTodo: Todo;

  constructor(private firebase: AngularFireDatabase) { }

  getTodos() {
    return this.todoList = this.firebase.list('todos');
  }

  insertTodo(todo: Todo) {
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
