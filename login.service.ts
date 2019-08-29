import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
    public loginUser()
  {
    //console.log("in login user");
    localStorage.setItem("loginStatus", "loggedin");
  }

  public logoutUser()
  {
    //console.log("in logout user");
    localStorage.setItem("loginStatus", "loggedout");
  }

  public isLoggedIn():boolean
  {
    status:String;
    
    status = localStorage.getItem("loginStatus");

    if(status == "loggedin")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  }

