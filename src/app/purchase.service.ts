import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  item:Item;
  amount:number;
  houseno:string="";
  location:string="";
  district:string="";
  state:string="";
  pincode:string="";
  phone:string="";
  email:string="";
  quantity:number;
  constructor() { }
  setItem(item:Item)
  {
   this.item=item;
  }
  getItem()
  {
    return this.item;
  }
  setamount(amount:number)
  {
   this.amount=amount;
  }
  getamount()
  {
    return this.amount;
  }
  sethouseno(houseno:string)
  {
   this.houseno=houseno;
  }
  gethouseno()
  {
    return this.houseno;
  }
  setlocation(location:string)
  {
   this.location=location;
  }
  getlocation()
  {
    return this.location;
  }
  setdistrict(district:string)
  {
   this.district=district;
  }
  getdistrict()
  {
    return this.district;
  }
  setstate(state:string)
  {
   this.state=state;
  }
  getstate()
  {
    return this.state;
  }
  setpincode(pincode:string)
  {
   this.pincode=pincode;
  }
  getpincode()
  {
    return this.pincode;
  }
  setphone(phone:string)
  {
   this.phone=phone;
  }
  getphone()
  {
    return this.phone;
  }
  setemail(email:string)
  {
   this.email=email;
  }
  getemail()
  {
    return this.email;
  }
  setquantity(quantity:number)
  {
    this.quantity=quantity;
  }
  getquantity()
  {
    return this.quantity;
  }

}
