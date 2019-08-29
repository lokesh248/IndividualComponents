import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from '../accounts';
import { $ } from 'protractor';

@Component({
  selector: 'app-add-modify-details',
  templateUrl: './add-modify-details.component.html',
  styleUrls: ['./add-modify-details.component.css']
})
export class AddModifyDetailsComponent implements OnInit {

  constructor(public http:HttpClient) { }
  addDetails(){}
  modifyDetails(){}
  searchText:string;
   response:any;
   accounts:Accounts[];
   show:boolean=true;
// display(accNum:string){
//   // $('#modifyModal').modal('hide');
//   this.show=false;
//   console.log(accNum);
// }
  ngOnInit( ) {
    this.http.get("http://localhost:3000/accounts").toPromise()
.then(data => {console.log(data);this.response=data;this.accounts=this.response;})
.catch((error) => console.error("error",error));
  }

}