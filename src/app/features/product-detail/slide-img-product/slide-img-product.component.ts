import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper, { Navigation, Thumbs } from 'swiper';



@Component({
  selector: 'app-slide-image-product',
  templateUrl: './slide-img-product.component.html',
  styleUrls: ['./slide-img-product.component.css'],
})
export class SlideImgProductComponent implements OnInit, AfterViewInit {
  @Input() images: string[] = [];

  private swiper?:any;
  private swiper2?: any;

  ngOnInit(): void {
    Swiper.use([Navigation, Thumbs]); // Sử dụng Navigation và Thumbs
  }

  ngAfterViewInit(): void {
    this.initializeSwipers();
  }

  private initializeSwipers(): void {
    this.swiper = new Swiper('.mySwiper', {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    this.swiper2 = new Swiper('.mySwiper2', {
      loop: false,
      spaceBetween: 10,
      navigation: {
        nextEl: '.carousel-control-next',
        prevEl: '.carousel-control-prev',
      },
      thumbs: {
        swiper: this.swiper,
      },
    });
  }
}