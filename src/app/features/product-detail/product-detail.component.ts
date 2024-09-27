import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.model';
import jQuery from 'jquery';

const $ = jQuery;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit{
  product!: Product;
  selectedImage: string = '';
  imageTransition: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router:Router) {
      
    }

  ngOnInit(): void {
    const product = this.route.snapshot.data['product'];
    if (product) {
      this.product = product;
      this.selectedImage = this.product.imageLinks[0];
    } else {
      this.router.navigate(['/404']);
    }
  }

  // loadProduct(id: string): void {
  //   this.productService.getProductById(id).subscribe(
  //     (response) => {
  //       this.product = response.data;
  //       this.selectedImage = this.product.imageLinks[0];
        
  //     },
  //     (error) => {
  //       if (error.status === 404 || error.status === 400 || error.status === 500 ) {
  //         this.router.navigate(['/404']);
  //     }
  //   }
  //   );
  // }
}
