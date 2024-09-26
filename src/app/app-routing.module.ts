import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { SlideImgProductComponent } from './features/product-detail/slide-img-product/slide-img-product.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'slide',
    component: SlideImgProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
