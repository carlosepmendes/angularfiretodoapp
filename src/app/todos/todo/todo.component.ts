import { TodoService } from './../shared/todo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(todoForm: NgForm) {
    if (todoForm.value.$key == null) {
      this.todoService.insertTodo (todoForm.value);
    } else {
      this.todoService.updateTodo (todoForm.value);
    }
    this.resetForm(todoForm);
  }

  resetForm(todoForm?: NgForm) {
    if (todoForm != null) {
      todoForm.reset();
    }
    this.todoService.selectedTodo = {
      $key: null,
      done: false,
      text: ''
    };
  }
}
