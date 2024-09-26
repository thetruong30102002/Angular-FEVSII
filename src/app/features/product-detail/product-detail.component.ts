import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.model';
import jQuery from 'jquery';
import { CommonModule } from '@angular/common';
import { VietnamCurrencyPipe } from '../../shared/pipes/vietnamCurrency/vietnam-currency.pipe';



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
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(productId);
    }
  }

  loadProduct(id: string): void {
    this.productService.getProductById(id).subscribe(
      (response) => {
        this.product = response.data;
        this.selectedImage = this.product.imageLinks[0];
        
      },
      (error) => {
        if (error.status === 404 || error.status === 400) {
          this.router.navigate(['/404']);
      }
    }
    );
  }

  selectImage(image: string): void {
  this.imageTransition = true; // Bắt đầu hiệu ứng chuyển đổi
  setTimeout(() => {
    this.selectedImage = image; // Thay đổi hình ảnh
    this.imageTransition = false; // Kết thúc hiệu ứng chuyển đổi
  }, 300); // Thời gian trễ để cho hiệu ứng chạy trước khi thay đổi hình ảnh
}

  previousImage(): void {
    const currentIndex = this.product.imageLinks.indexOf(this.selectedImage);
    const previousIndex = (currentIndex - 1 + this.product.imageLinks.length) % this.product.imageLinks.length;
    this.selectImage(this.product.imageLinks[previousIndex]);
  }

  nextImage(): void {
    const currentIndex = this.product.imageLinks.indexOf(this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.product.imageLinks.length;
    this.selectImage(this.product.imageLinks[nextIndex]);
  }
}
