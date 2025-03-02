import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoWrapperComponent } from './components/todo-wrapper/todo-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoWrapperComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
























// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TodoComponent } from './todo/todo.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, TodoComponent],
//   template: `<app-todo></app-todo>`,
// })
// export class AppComponent {
//   title = 'ToDoApp';
// }
