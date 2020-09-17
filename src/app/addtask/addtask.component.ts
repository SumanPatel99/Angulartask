import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private auth:AuthService, private hero:HeroService, private rout:Router) { }

  ngOnInit() {
  this.auth.remove()
    this.hero.dataTransfer({userStatus : 0}) // link hide code
    this.rout.navigate(["/login"])
  }

}
