import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../item';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router:Router,private purchaseserice:PurchaseService) { }
  item:Item;
  quantity:number;
  amount:number;
  houseno:string="";
  location:string="";
  district:string="";
  state:string="";
  pincode:string="";
  phone:string="";
  email:string="";
  message:string;
  det:boolean=false;
  pay:boolean=true;
  ngOnInit(): void {
    this.item=this.purchaseserice.getItem();
    this.det=this.purchaseserice.getdet();
  }
  total()
  {
    if(this.quantity>0)
    this.amount=this.item.price*this.quantity;
    else
    alert("The quantity should be greater than zero");
  }
  
  proceed(form:any)
  {
     if(form.valid)
     {
      if(this.quantity>0)
      {
         this.purchaseserice.setamount(this.amount);
         this.purchaseserice.sethouseno(this.houseno);
         this.purchaseserice.setlocation(this.location);
         this.purchaseserice.setdistrict(this.district);
         this.purchaseserice.setstate(this.state);
         this.purchaseserice.setpincode(this.pincode);
         this.purchaseserice.setphone(this.phone);
         this.purchaseserice.setemail(this.email);
         this.purchaseserice.setquantity(this.quantity);
         this.purchaseserice.setpay(this.pay);
         this.router.navigate([`payment`]);

      }
      else
      {
        alert("The quantity should be greater than zero");
      }
     }



  }


}
