import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsComponent } from './show-products.component';
import { ProductPresentationComponent } from '../product-presentation/product-presentation.component';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from '../banner/banner.component';


describe('ShowProductsComponent', () => {
  let component: ShowProductsComponent;
  let fixture: ComponentFixture<ShowProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductsComponent, ProductPresentationComponent, BannerComponent ],
      imports:[ RouterTestingModule, HttpClientModule ]
    })
    .overrideComponent(ShowProductsComponent, { set: { providers: [ { provide: DataService, useClass: MockDataService }]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a list of 4 movies', () => {
    fixture = TestBed.createComponent(ShowProductsComponent);
    component = fixture.componentInstance;
    expect(component.movies.length).toBe(4);
  });

  it('should create 4 categories', () => {
    fixture = TestBed.createComponent(ShowProductsComponent);
    component = fixture.componentInstance;
    expect(component.categories.length).toBe(4);
  });

});
