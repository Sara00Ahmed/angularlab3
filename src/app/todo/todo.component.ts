// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-todo',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css'],
// })
// export class TodoComponent {
//   newTask: string = '';
//   tasks: { text: string; completed: boolean }[] = [];

//   addTask() {
//     if (this.newTask.trim()) {
//       this.tasks.push({ text: this.newTask, completed: false });
//       this.newTask = '';
//     }
//   }

//   deleteTask(index: number) {
//     this.tasks.splice(index, 1);
//   }

//   completeTask(index: number) {
//     this.tasks[index].completed = !this.tasks[index].completed;
//   }
// }

