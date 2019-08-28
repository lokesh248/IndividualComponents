import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}
