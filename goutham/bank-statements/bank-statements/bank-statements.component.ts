import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-statements',
  templateUrl: './bank-statements.component.html',
  styleUrls: ['./bank-statements.component.css']
})
export class BankStatementsComponent implements OnInit {
    users:any = [
        {
            "Date": "1-2-2018",
            "Amount": "1000",
            "Balance": "balance-1",
            "Description": "debited to one97"
        },
        {
            "Date": "1-2-2018",
            "Amount": "1000",
            "Balance": "balance-1",
            "Description": "debited to one97"
        },
        {
            "Date": "1-2-2018",
            "Amount": "1000",
            "Balance": "balance-1",
            "Description": "debited to one97"
        }
    ];  
    constructor() 
    {}

  ngOnInit() {}
 

}
