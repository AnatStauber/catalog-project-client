import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Item} from 'src/app/models/Item';
import { ItemService } from 'src/app/services/Item.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public allItems: Item[];


  public constructor(private title : Title, private itemService: ItemService) { }

  ngOnInit() {
    this.title.setTitle("myCatalog's Products");

    let ob = this.itemService.getAllItems(); 
    ob.subscribe(prods => this.allItems = prods); 

  }

}
