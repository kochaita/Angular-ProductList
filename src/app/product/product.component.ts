import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.css']
})

export class ProductComponent implements OnInit{

    private productService;
    imageWidth : number =  100;
    imageHeight : number = 100;
    showImage : boolean = true;
    _listFilter : string ;
    filteredProducts : IProduct[];
    products : IProduct[] = [];

    constructor(productService : ProductService){
      this.productService = productService;
    }

    get listFilter() : string {
      return this._listFilter;
    }

    set listFilter(value : string)  {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.doFilter(this.listFilter) : this.products;
    }

    doFilter(filterValue : string) : IProduct[] {
      filterValue = filterValue.toLocaleLowerCase();
      return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().indexOf(filterValue) !== -1) 
    }

    toggleImage() : void {
      this.showImage = !this.showImage;
    }

    ngOnInit() : void {
      this.productService.getProducts().subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        }
      )
    }
}