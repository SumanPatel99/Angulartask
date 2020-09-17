import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/Common/Http';
import { Subject } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url="http://localhost:3000/"

  constructor(private Http:HttpClient) { }

  getData(record){
    console.log(record);
    let finalurl = this.url + record;
    return this.Http.get(finalurl); 
  }
  postdata(record,data_fromuser){
    // console.log(record)
    let finalurl = this.url+record
    // console.log(finalurl)
    return this.Http.post(finalurl,data_fromuser)
    }

    deletePost(id){
      return this.Http.delete(this.url+'tasks/'+id);
    }
     
    changePassword(password,id){
      return this.Http.patch(this.url+'user/'+id,{password:password})
    }
  public sub = new Subject()
  dataTransfer(obj){
  	this.sub.next(obj);

  }
}
