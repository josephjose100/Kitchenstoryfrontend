import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

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
  con:boolean=false;
  constructor(private purchaseservice:PurchaseService) { }

  ngOnInit(): void {
    this.item=this.purchaseservice.getItem();
    this.quantity=this.purchaseservice.getquantity();
    this.amount=this.purchaseservice.getamount();
    this.houseno=this.purchaseservice.gethouseno();
    this.location=this.purchaseservice.getlocation();
    this.district=this.purchaseservice.getdistrict();
    this.state=this.purchaseservice.getstate();
    this.pincode=this.purchaseservice.getpincode();
    this.phone=this.purchaseservice.getphone();
    this.email=this.purchaseservice.getemail();
    this.con=this.purchaseservice.getcon();

  }

}
