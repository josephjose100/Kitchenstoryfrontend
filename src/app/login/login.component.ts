import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Item } from '../item';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  oldPassword:string;
  newPassword1:string;
  newPassword2:string;
  isLogin:boolean;
  name:string;
  password:string;
  admins:Admin[];
  iteminfo:Item[];
  newItem:Item=new Item();
  message:string;
  pAdmin:Admin=new Admin();



  aName:string[];
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void {
    
    this.isLogin=false;
    this.getadmins();
    this.getAllItems();
    
  }

  getAllItems()
  {

    this.adminservice.GetAllItems().subscribe(data =>{
      this.iteminfo=data;
    });

  }

  validateCredentials()
  {
    for (let admin of this.admins) {
      if((admin.adminName==this.name)&&(admin.adminPassword==this.password))
      {
        
        this.pAdmin.id=admin.id;
        this.pAdmin.adminName=this.name;
        this.pAdmin.adminPassword=this.password;
        this.isLogin=true;
        
      }   
  }
}

  getadmins()
  {

    this.adminservice.GetAllAdmins().subscribe(data =>{
      this.admins=data;
    });
  }

  deleteItem(id:number)
  {
    let ch=confirm("do you want to delete");
    if(ch)
    {
      this.adminservice.DeleteItem(id).subscribe(data =>{
        this.getAllItems();
      });
    }
  }
  addItem()
  {
    
    this.adminservice.AddItem(this.newItem).subscribe(data =>{
      this.getAllItems();
    })


  }

  changepassword(form:any)
  {
   if(form.valid)
   {
     if(this.oldPassword==this.pAdmin.adminPassword)

     {

      if(this.newPassword1==this.newPassword2)
      {
        this.pAdmin.adminPassword=this.newPassword1;
        this.message="password changed successfully";
       this.adminservice.ChangePassword(this.pAdmin).subscribe(data =>{
        this.getAllItems();
       });
      }
      else
      {
        this.message="passwords not match";
      }
    }
    else
    {
      this.message="old password not correct";
    }
  }
}

logout()
{
  this.isLogin=false;
}

}
