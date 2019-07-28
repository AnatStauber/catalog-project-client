import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/Item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  private item: Item = new Item();

  constructor(private router: Router,private itemService: ItemService) { }

  ngOnInit() {
  }

  public add(): void {
    let ob = this.itemService.addItem(this.item);
    ob.subscribe(i=> {this.item=i;
      alert("congrats! the product was added successfully."); 
    }, err => {
      alert("Nope. this item number already exist.");
  });
    this.router.navigate(["/products"]);

  }
}
