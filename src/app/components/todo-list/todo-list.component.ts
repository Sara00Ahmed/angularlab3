import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskDeleted = new EventEmitter<number>();
  @Output() taskCompleted = new EventEmitter<number>();

  deleteTask(index: number) {
    this.taskDeleted.emit(index);
  }

  completeTask(index: number) {
    this.taskCompleted.emit(index);
  }
}
