import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from './product'
import { ProductService } from './product.service';

@Component({
    templateUrl : './product-details.component.html'
})

export class ProductDetailsComponent{

    private route;
    private router;
    id : number;
    product : IProduct;
    private productService;

    constructor(route : ActivatedRoute, productService : ProductService, router : Router){
        this.route = route;
        this.router = router;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.productService = productService;
        this.getProduct(this.id);
    }

    getProduct(id : number) : void{
        this.productService.getProduct(id).subscribe(
            product => this.product = product
        )
    }

    toProductsPage() : void {
        this.router.navigate(['/products'])
    }
}