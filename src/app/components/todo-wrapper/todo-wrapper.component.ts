import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css']
})
export class TodoWrapperComponent {
  tasks = signal<Task[]>([]);

  addTask(taskText: string) {
    this.tasks.update(tasks => [...tasks, { text: taskText, completed: false }]);
  }

  deleteTask(index: number) {
    this.tasks.update(tasks => tasks.filter((_, i) => i !== index));
  }

  toggleComplete(index: number) {
    this.tasks.update(tasks => 
      tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task)
    );
  }
}
