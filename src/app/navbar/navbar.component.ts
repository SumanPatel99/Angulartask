import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public myvar1: boolean = true;
  public myvar2: boolean = false


  constructor(private auth:AuthService, private hero :HeroService) { }

  ngOnInit() {
  	this.hero.sub.subscribe(
      response => {
        console.log("header",response)
        if(response['userStatus']==1){
          this.myvar2 = true
          this.myvar1 = false
       }
        else{
          this.myvar2 = false
          this.myvar1 = true
        }
      }
    )
    if(this.auth.check()){
      console.log("page refresh")
      this.myvar2 = true
      this.myvar1 = false
    }

  }

}
