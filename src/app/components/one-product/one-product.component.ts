import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/Item.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  public item: Item;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit() {
   
   
    const itemNumber = parseInt(this.activatedRoute.snapshot.params.itemNumber); 
    let ob = this.itemService.getItem(itemNumber); 
    ob.subscribe ( i => { 
      this.item = i});
    
    }
   
    private confirmDelete(): void {
      if (confirm("Are you sure you want to delete this product?")){
        this.deleteProduct();
      }
    }

    private deleteProduct(): void{
      let ob = this.itemService.deleteItem(this.item.itemNumber);
      ob.subscribe(deleted=> {
        alert("product #" +this.item.itemNumber + " was deleted successfully");
        this.goToProducts();
      }
      );
    }

    private goToProducts () : void {
        this.router.navigate(["/products"]);
      }
  
    }
  

