import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/Common/Http';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user= true;
  public password =false;
  public newpass = true;
  public username = '';
  UserForm : FormGroup
  constructor(private hero: HeroService, private formbuilder: FormBuilder, private auth: AuthService, private Http:HttpClient) {
     ///////////////////////////
     this.UserForm= this.formbuilder.group({
      password:['', [Validators.required]],
      newpassword:['', [Validators.required]]
    })
    //////////////////////////
   }

  ngOnInit() {
    this.username= localStorage.getItem('emailId')
  }
   
  // PassData(form){
  //   console.log(form)
  //   this.hero.getData("user").subscribe(
  //     (response)=>{
  //       console.log(response);
  //     }
  //   )
  // }
  forgetpwd(userData){
    console.log(userData.value)
    this.hero.changePassword(userData.value,localStorage.getItem('Id')).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    this.password= false;
    this.newpass = true
  }

}
