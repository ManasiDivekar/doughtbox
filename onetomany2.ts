class employee{
fname:string;
lname:string;
empid:number;
bank:bank;

constructor(fname:string,lname:string,empid:number,bank:bank){
this.fname=fname;
this.lname=lname;
this.empid=empid;
this.bank=bank;
}
}
class bank{
    bname:string;
    accnum:number;
    ifse:number;
    contact:contact[];
   constructor(bname:string,accnum:number,ifse:number,contact:contact[]){
    this.bname=bname;
    this.accnum=accnum;
    this.ifse=ifse;
    this.contact=contact;
   }

}
class contact{
cnumber:number;
constructor(cnumber:number){
    this.cnumber=cnumber;
}
}

let perm = new contact(2345678);
let temp = new contact(32456789);
let con:contact[]=[perm,temp];
let b1 = new bank("dfgh",345678,345678,con);
let e1 = new employee("mansi","divekar",345678,b1);
console.log(e1);