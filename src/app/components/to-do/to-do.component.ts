import { Component } from '@angular/core';
import { Tasks } from 'src/app/models/tasks';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {

  allTasks: Tasks[] = [
    {name: "Feed the fish",
    completed : true
  },
  {
    name:"Fix Car",
    completed : false
  },
  {
   name: "Feed dogs",
   completed : true
  },
  {
   name: "Walk Waffles",
   completed : true
  },
  {
   name: "Finish Linkedin",
   completed : false
  },
  {
   name: "Do Angular lab",
   completed : false
  },
  {
   name: "Grocery shop",
   completed : true
  },
  {
   name: "Laundry",
   completed : true
  },
  {
   name: "Mow Lawn",
   completed : true
  }
    
  ];
  newTask: Tasks = {} as Tasks;

  addTask(): void {
    let result:Tasks={
      name: this.newTask.name,
      completed: this.newTask.completed
        };
    this.allTasks.push(result);
    this.newTask = {} as Tasks; //resets the input box on html after book is submitted
  }

completeTask(targetTask:Tasks): void{
if(targetTask.completed == true){
targetTask.completed =false;
}
else{
  targetTask.completed = true;
}
}

allDone(allTasks:Tasks[]):boolean{
  let done=true;
  this.allTasks.forEach((a:Tasks)=>{
    if(a.completed == false){
      done =false;
      
    }
  })
  return done;
}
removeTask(targetTask:Tasks):void{
  
  // let index = this.allTasks.findIndex((b:Tasks) => b=targetTask);
  
  this.allTasks.splice(this.allTasks.findIndex((b:Tasks) => b=targetTask), 1)
}


}
