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
  district:String="";
  state:string="";
  pincode:string="";
  phone:string="";
  email:string="";
  message:string;
  ngOnInit(): void {
    this.item=this.purchaseserice.getItem();
    
  }
  total()
  {
    if(this.quantity>0)
    this.amount=this.item.price*this.quantity;
    else
    this.message="Quantity should be greater than 0";
  }
  
  proceed(form:any)
  {

  }


}
