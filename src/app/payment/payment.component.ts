import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cardno:string="";
  date:Date;
  cvv:string;
  password:number;
  pay:boolean=false;
  con:boolean=true;
  constructor(private router:Router,private purchaseservice:PurchaseService)  { }

  ngOnInit(): void {

     this.pay=this.purchaseservice.getpay();
  }

  confirm()
  {
    this.purchaseservice.setcon(this.con); 
     this.router.navigate([`confirm`]);
  }

}
