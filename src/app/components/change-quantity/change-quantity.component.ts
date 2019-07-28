import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/Item.service';
import { Item } from 'src/app/models/Item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-quantity',
  templateUrl: './change-quantity.component.html',
  styleUrls: ['./change-quantity.component.css']
})
export class ChangeQuantityComponent implements OnInit {
 
  private item = new Item();

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private itemService: ItemService) { }

  ngOnInit() {
    const itemNumber = parseInt(this.activatedRoute.snapshot.params.itemNumber);  
    let ob = this.itemService.getItem(itemNumber);
    ob.subscribe(currItem => {
      this.item=currItem;
      });
  }
  
  
  public changeQuantity() :void{
    let ob = this.itemService.updateQuantity(this.item);
    ob.subscribe(updatedItem => {
      alert("quantity updated successfully");
      this.goToProduct();
      }
    ); 
  }

  public goToProduct() : void {
      this.router.navigate(["/one-product/" + this.item.itemNumber]);
    }

}
