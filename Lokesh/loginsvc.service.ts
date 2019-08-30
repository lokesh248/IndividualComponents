import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Consumer } from './consumer';

@Injectable({
  providedIn: 'root'
})
export class LoginsvcService {

  constructor(public http:HttpClient) { }

  cons:any;

  public getConsumer(email:string)
  {
    console.log("Calling getConsumer()");
    let empHeaders = new HttpHeaders({'Content-Type': 'text/plain'});
    let par = new HttpParams();
    par = par.set("email", email);
    return this.http.post("http://localhost:8080/klang/consumers/cus", par)
      .toPromise()
      .then(response=>response as Consumer)
      .catch(err=>console.log(err));
  }

  // prom:Promise;

  public getCons(email:string):any
  {
    console.log("Calling getCons()");

    return this.getConsumer(email).then((resp)=>{this.cons = resp;
    console.log(this.cons);
  return resp;});

    //console.log(this.cons);

    //return this.cons;

    
  }
}
