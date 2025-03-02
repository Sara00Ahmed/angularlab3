import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  newTask: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim()) {
      this.taskAdded.emit(this.newTask);
      this.newTask = '';
    }
  }
}
