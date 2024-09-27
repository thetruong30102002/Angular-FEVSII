import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product | null> {
  constructor(private productService: ProductService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product | null> {
    const productId = route.paramMap.get('id');

    if (productId) {
      return this.productService.getProductById(productId).pipe(
        map((response: { data: Product }) => response.data), // Trích xuất 'data'
        catchError(() => {
          this.router.navigate(['/404']);
          return of(null); // Trả về null nếu có lỗi
        })
      );
    } else {
      this.router.navigate(['/404']);
      return of(null); // Trả về null nếu không có productId
    }
  }
}
