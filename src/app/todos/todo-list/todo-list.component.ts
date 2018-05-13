import { Todo } from './../shared/todo.model';
import { TodoService } from './../shared/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    const x = this.todoService.getTodos();
    x.snapshotChanges().subscribe(item => {
      this.todoList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.todoList.push(y as Todo);
      });
    });
  }

  onEdit(todo: Todo) {
    this.todoService.selectedTodo = Object.assign({}, todo);
  }

  onDelete(key: string) {
    if (confirm('Are you sure you want to delete this record?') === true) {
    this.todoService.deleteTodo(key);
    }
  }
}
