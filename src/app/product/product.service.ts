import { Injectable, OnInit } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn : 'root'
})

export class ProductService{

    private productsUrl = 'assets/products.json';
    products : IProduct[];

    constructor(private http : HttpClient){}

    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productsUrl);
    }

    getProduct(id : number) : Observable<IProduct> {
        console.log(id);
        return this.getProducts().pipe(
            map((products : IProduct[]) => products.find(p => p.productId === id))
        );
    }
}

    /*getProduct(id : number) : IProduct {
        var count : number = 0;
        var i : number;
        for(i = count; i< this.products.length; i ++){
          if(this.products[i].productId == id)
          return this.products[i];
        }
    }*/