import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  store(obj){
    localStorage.setItem("emailId",obj.email)
    localStorage.setItem("Id",obj.id)


  }
  get(userval){
    let ans = (localStorage.getItem(userval)===null)?false:(localStorage.getItem(userval));
    return ans;
  //  return localStorage.getItem("emailId");
  //  return localStorage.getItem("userName");

  }
  check(){
  let ans = localStorage.getItem("emailId")
  if(ans=== null){
    return false;
  }else{
    return true;
  }
  }
  remove(){
   localStorage.removeItem("emailId")
   localStorage.removeItem("Id")

  }
}
