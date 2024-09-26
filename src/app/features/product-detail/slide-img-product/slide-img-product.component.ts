import { Component, OnInit, Input } from '@angular/core';
import Swiper, { Navigation, Thumbs,FreeMode } from 'swiper';

Swiper.use([Navigation, Thumbs,FreeMode]);

@Component({
  selector: 'app-slide-image-product',
  templateUrl: './slide-img-product.component.html',
  styleUrls: ['./slide-img-product.component.css'],
})
export class SlideImgProductComponent implements OnInit {
  @Input() images: string[] = [];

  swiper?: any;
  swiper2?: any;
  selectedIndex: number = 0; 

   ngOnInit(): void {
    // Khởi tạo swiper cho thumbnail
    this.swiper = new Swiper('.mySwiper', {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      on: {
        click: (swiper:any) => {
          const clickedIndex = swiper.clickedIndex;
          if (clickedIndex !== undefined) {
            this.selectedIndex = clickedIndex; // Cập nhật chỉ số được chọn
            this.swiper2?.slideTo(clickedIndex); // Chuyển đến hình ảnh chính tương ứng
          }
        },
      },
    });

    // Khởi tạo swiper cho hình ảnh chính
    this.swiper2 = new Swiper('.mySwiper2', {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: this.swiper,
      },
    });
  }

  selectThumbnail(index: number): void {
    this.selectedIndex = index; // Cập nhật chỉ số được chọn khi nhấn vào thumbnail
    this.swiper2?.slideTo(index); // Chuyển đến hình ảnh chính tương ứng
  }

  nextImage(): void {
    this.swiper2?.slideNext(); // Chuyển đến hình ảnh tiếp theo
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length; // Cập nhật chỉ số
  }

  previousImage(): void {
    this.swiper2?.slidePrev(); // Chuyển đến hình ảnh trước đó
    this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length; // Cập nhật chỉ số
  }
}