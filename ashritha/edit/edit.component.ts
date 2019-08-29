import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Accounts } from '../accounts';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  response:any;
  sub:any;
  routeParam:any;
  msg:string;
  accounts:Accounts[];
  pName:string;
  pIncome: string;
  pAadhar: string;
  pAddress: string;
  pDob: string;
  pPan: string;
  pMobile: string;
  pEmail: string;
  constructor(public pObjRoute:ActivatedRoute,public http:HttpClient) {
    this.sub=this.pObjRoute.params.subscribe(params => {this.routeParam=params['id']
  });
  
  }
  
  updateDetails(){
    
  
    this.http.put("http://localhost:3000/accounts/"+this.routeParam,{
      "accNum":this.routeParam,
      "accName":this.pName,
      "income":  this.pIncome,
      "aadharNum":  this.pAadhar,
      "address":  this.pAddress,
      "dob":  this.pDob,
      "panNum":  this.pPan,
      "mobileNum":  this.pMobile,
      "email":  this.pEmail

    }).toPromise()
    .then(data => {console.log("PUT Request is successful ", data);})
    .catch((error) => console.error("error",error));
  
  }
  ngOnInit() {
    this.http.get("http://localhost:3000/accounts").toPromise()
    .then(data => {console.log(data);this.response=data;this.accounts=this.response;})
    .catch((error) => console.error("error",error));
  }

}
