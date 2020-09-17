import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/Common/Http';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @ViewChild('taskData') task:ElementRef
  @ViewChild('val') checkval:ElementRef
  public tasks : any;
  /////////////////////////////////
  AddTask(taskData,value){
    console.log(taskData.value,value.checked)
    this.Http.post("http://localhost:3000/tasks",{title:taskData.value,value:value.checked}).subscribe(
      (response) =>
        {console.log(response)
          this.task.nativeElement.value=''
          this.checkval.nativeElement.checked= false
          this.ngOnInit()
        },
      (error) =>{console.log(error)}
    )
  }
  ////////////////////////////////
  constructor(private router:Router, private Http:HttpClient , private hero:HeroService) {
    console.log(this.Http)
   }

  ngOnInit() {
    ///////////////////////////////
 this.hero.getData("tasks")
 .subscribe(
    (response)=>{
     console.log(response)
     this.tasks=response
    },
   (error)=>{console.log(error)}
 )
  /////////////////////////////////
  }

  deleteData(tasks){
      ///////////////////////////////
   
      this.hero.deletePost(tasks.id)
      .subscribe(response => {
        this.tasks = this.tasks.filter(item => item.id !== tasks.id);
      });
  /////////////////////////////////
  }
}


