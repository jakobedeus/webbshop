import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsComponent } from './show-products.component';
import { ProductPresentationComponent } from '../product-presentation/product-presentation.component';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';


describe('ShowProductsComponent', () => {
  let component: ShowProductsComponent;
  let fixture: ComponentFixture<ShowProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductsComponent, ProductPresentationComponent ]
    })
    .overrideComponent(ShowProductsComponent, { set: { providers: [ {provide: DataService, useClass: MockDataService}]}})
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

});
