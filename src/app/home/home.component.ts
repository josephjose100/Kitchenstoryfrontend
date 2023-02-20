import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Item } from '../item';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText;
 



  items:Item[]=[];
  items1:Item[]=[];
  items2:Item[]=[];
  items3:Item[]=[];
  items4:Item[]=[];




  constructor(private adminservice:AdminService,private router:Router,private purchaseservice:PurchaseService) { }

  ngOnInit(): void {

     this.getAllItems();
     this.getDividedItems();
     
  }

  getAllItems()
  {

    this.adminservice.GetAllItems().subscribe(data =>{
      this.items=data;
    });

  }
  getDividedItems()
  {
    this.items1=this.items.slice(2);
    
    

  }
  proceedtobuy(item:Item)
  {
    this.purchaseservice.setItem(item);
    this.router.navigate(['details']);

    
  }

}
