import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module'; // Nếu bạn có routing
import { ProductService } from './services/product/product.service';
import { CommonModule } from '@angular/common';
import { VietnamCurrencyPipe } from './shared/pipes/vietnamCurrency/vietnam-currency.pipe';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    ProductDetailComponent,
    VietnamCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
