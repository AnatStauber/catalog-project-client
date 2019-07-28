import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import { ProductsComponent } from './components/products/products.component';
import { Page404Component } from './components/page404/page404.component';
import {HttpClientModule} from "@angular/common/http";
import { AddProductComponent } from './components/add-product/add-product.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { ItemService } from './services/Item.service';
import { ChangeQuantityComponent } from './components/change-quantity/change-quantity.component';


 const routes: Routes =[
  {path: "home", component:HomeComponent},
  {path : "products", component:ProductsComponent},
  {path: "addProduct", component:AddProductComponent},
  {path:"one-product/:itemNumber", component:OneProductComponent},
  {path:"changeQuantity/:itemNumber", component:ChangeQuantityComponent},
  {path: "" , redirectTo: "home", pathMatch: "full"},
  {path: "**" , component:Page404Component}
  ];

@NgModule({
  declarations: [
    LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, 
    ProductsComponent, Page404Component, AddProductComponent, OneProductComponent, ChangeQuantityComponent 
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule,
     RouterModule.forRoot(routes, { enableTracing: true }), 
     HttpClientModule
    ],

  
  providers: [ItemService],
  bootstrap: [ LayoutComponent,HeaderComponent, FooterComponent,MenuComponent, HomeComponent]
})
export class AppModule { }
