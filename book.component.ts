import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(pName:string, pId:number,pDept:string) {
    this.Name=pName;
    this.Id=pId;
    this.Dept=pDept;
   }
  public Name:string;
  public Id :number;
  public Dept:string;
  public NoOfBooksOnHold:string;

  ngOnInit() {
  }
  RequestBook(pBookName:string):string{
    return pBookName;
  }
 
  ReturnBook(pBookName:string):string{
    return pBookName;
  }

  ObtainBook(pNoOfBooksOnHold:string){
    console.log("Updated Book Count"+pNoOfBooksOnHold);
  }
}
