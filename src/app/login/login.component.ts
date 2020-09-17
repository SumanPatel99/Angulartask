import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm, MinLengthValidator} from '@angular/forms' ;
import { AuthService } from '../auth.service';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm :FormGroup;

  constructor( private frmbuilder :FormBuilder, private hero:HeroService , private auth: AuthService, private router:Router) {
  this.LoginForm= this.frmbuilder.group({  
      password:['',[Validators.required]],
      email:['',[Validators.required]]
    }) }

  ngOnInit() {
  }
  LoginData(value){
    let userData 
  	console.log(value.value)
    let useremail = value.value.email;
    let password = value.value.password;
     return this.hero.getData("user").subscribe(
      (response)=>{
        console.log(response);
        let count = 0;
        for(let myvar in response ){
          console.log(response[myvar]);
          if (response[myvar].email == useremail && response[myvar].password == password){
            userData = response[myvar]
            count++;
            break;
          }
        }
        if ( count >0){
         this.auth.store(userData);
         this.hero.dataTransfer({userStatus : 1})
         this.router.navigate(["/"]);
        }else{
          console.log("No")
        }

      }
      )


  }

}
