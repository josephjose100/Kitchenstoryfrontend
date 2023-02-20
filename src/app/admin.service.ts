import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Admin } from './admin';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl="http://localhost:8081/kitchen";

  constructor(private httpclient:HttpClient) { }

  GetAllAdmins():Observable<Admin[]>{

    return this.httpclient.get<Admin[]>(`${this.baseUrl}/validateAdmin`);
  }

  GetAllItems():Observable<Item[]>{

    return this.httpclient.get<Item[]>(`${this.baseUrl}/getItems`)
  }

  DeleteItem(id:number):Observable<Object>{

    return this.httpclient.delete(`${this.baseUrl}/deleteItem/${id}`);
   }

   AddItem(item:Item):Observable<Object>{

    return this.httpclient.post(`${this.baseUrl}/addItem`,item);
   }
 
   ChangePassword(admin:Admin):Observable<Object>{

    return this.httpclient.post(`${this.baseUrl}/changePassword`,admin);
   }
   
}
