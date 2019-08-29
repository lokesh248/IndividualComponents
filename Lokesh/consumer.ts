export class Consumer
{
	accountNumber:number;
	fullName:String;
	accountType:String;
	income:number;
	aadhaarNumber:String;
	dob:Date;
	panNum:String;
	contactNumber:String;
    email:String;
    password:String;
    
    public constructor(accountNumber:number, fullName:String, accountType:String, income:number, aadhaarNumber:String,
        dob:Date, panNum:String, contactNumber:String, email:String, password:String) {
    this.accountNumber = accountNumber;
    this.fullName = fullName;
    this.accountType = accountType;
    this.income = income;
    this.aadhaarNumber = aadhaarNumber;
    this.dob = dob;
    this.panNum = panNum;
    this.contactNumber = contactNumber;
    this.email = email;
    this.password = password;
}
}
