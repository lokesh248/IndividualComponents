import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RegisService } from "../regis.service";
import { Consumer } from '../consumer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public rs:RegisService) { }

  Name:string;
  AadhaarNumber:string;
  PAN:string;
  Email:string;
  Mobile:string;
  Income:number;
  TypeOfAccount:string;
  AddressProof:string;
  Photo:string;
  DOB:Date;
  AadhaarScan:any;
  AddressProofScan:any;
  Pic:any;

  consumer:Consumer;

  ngOnInit()
  {
  }

  public addUser()
  {
    this.consumer = new Consumer(1234, this.Name, this.TypeOfAccount, this.Income, this.AadhaarNumber, this.DOB, this.PAN, this.Mobile, this.Email);

    this.rs.insertRec(this.consumer);
  }

}
