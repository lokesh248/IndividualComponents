import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Consumer } from "./consumer";

@Injectable({
  providedIn: 'root'
})
export class RegisService
{

  private _url="http://localhost:8080/klang/consumers";
  constructor(public http:HttpClient)
  { }

  public insertRec(record:Consumer)
  {
    let empHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(this._url, JSON.stringify(record), {headers: empHeaders})
      .toPromise()
      .then(response=>response as Consumer)
      .catch(()=>{console.log("Error")});
  }
}
