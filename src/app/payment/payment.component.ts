import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  confirm()
  {
     this.router.navigate([`confirm`]);
  }

}
