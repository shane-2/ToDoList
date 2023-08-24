import { Component } from '@angular/core';
import { Tasks } from './models/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'ToDoList';

  
  allTasks: Tasks [] = [];
  newTask:Tasks={} as Tasks;
  
// addTask():void{
//   let result: Tasks={
// Task: this.newTask.Task
// };  
//     this.allTasks.push(result);
//     this.newTask={} as Tasks; //resets the input box on html after book is submitted
// }






}
