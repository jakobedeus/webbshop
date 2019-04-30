import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPresentationComponent } from './product-presentation.component';
import { ShowProductsComponent } from '../show-products/show-products.component';
import { HttpClientModule } from '@angular/common/http';


describe('ProductPresentationComponent', () => {
  let component: ProductPresentationComponent;
  let fixture: ComponentFixture<ProductPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPresentationComponent, ShowProductsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
