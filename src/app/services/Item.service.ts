import { Injectable } from '@angular/core';
import { Item } from  '../models/Item';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

 

    public getAllItems() : Observable<Item[]> {
      return this.http.get<Item[]>("http://localhost:8080/catalog/getAll");
    }

    public getItem(itemNumber: number) :Observable<Item> {
      return this.http.get<Item>("http://localhost:8080/catalog/"+ itemNumber);
    }
  
    public addItem(item : Item) : Observable<Item> {
      return this.http.post<Item>("http://localhost:8080/catalog/createItem", item);
    }

    public updateQuantity (item : Item) : Observable<Item> {
      return this.http.put<Item>("http://localhost:8080/catalog/updateItem", item);
    }

    public deleteItem  (itemId: number): Observable<Response>{
      return this.http.delete<Response>("http://localhost:8080/catalog/"+itemId);
    }
  
  
  }

