import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from "@angular/Common/Http";
import { ReactiveFormsModule,FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AddtaskComponent } from './addtask/addtask.component';

import { Guard1Guard } from './guard1.guard';
import { Guard2Guard } from './guard2.guard';

const Route =[
{ path:'', component:HomeComponent, canActivate:[Guard2Guard] },
{ path:'task', component:TaskComponent, canActivate:[Guard2Guard] },
{ path:'user', component:UserComponent},
{ path:'logout', component:AddtaskComponent, canActivate:[Guard2Guard]  },
{ path:'login', component:LoginComponent, canActivate:[Guard1Guard]}



]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TaskComponent,
    UserComponent,
    LoginComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(Route),
    HttpClientModule, ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
