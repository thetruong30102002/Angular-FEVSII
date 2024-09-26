import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideImgProductComponent } from './slide-img-product.component';

describe('SlideImgProductComponent', () => {
  let component: SlideImgProductComponent;
  let fixture: ComponentFixture<SlideImgProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideImgProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideImgProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
