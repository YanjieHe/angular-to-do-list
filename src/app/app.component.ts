import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDialog = false;
  editingTodo?: TodoItem = null;
  fieldValue = "";
  todoList: Array<TodoItem> = [];
  okButtonText = "Create task";

  title = 'angular-to-do-list';

  todoDialog(todo?: TodoItem) {
    this.okButtonText = "Create task";
    this.fieldValue = "";
    this.editingTodo = todo;
    if (todo) {
      this.fieldValue = todo.title;
      this.okButtonText = "Edit task";
    }
    this.showDialog = false;
  }

  remove(index: number) {
    this.todoList.splice(index, 1);
  }

  editTodo(title: string) {
    this.editingTodo.title = title;
  }

  updateTodo(title?: string) {
    if (title) {
      title = title.trim();
      if (this.editingTodo) {
        this.editTodo(title);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  addTodo(title: string) {
    const todo = new TodoItem(title, false);
    this.todoList.push(todo);
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null;// make sure Input is new
  }
}

class TodoItem {
  title: string;
  completed: false;

  constructor(title: string, completed: false) {
    this.title = title;
    this.completed = completed;
  }
}