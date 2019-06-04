import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCartComponent } from './show-cart.component';
import { CartPresentationComponent } from '../cart-presentation/cart-presentation.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from '../banner/banner.component';

describe('ShowCartComponent', () => {
  let component: ShowCartComponent;
  let fixture: ComponentFixture<ShowCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCartComponent, CartPresentationComponent, BannerComponent],
      imports: [RouterTestingModule, HttpClientModule]
    })
      .overrideComponent(ShowCartComponent, { set: { providers: [{ provide: DataService, useClass: MockDataService }] } })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 1 item in cart', () => {
    const service = new MockDataService();

    service.getProductData().subscribe((movies) => {
      component.emptyCart();
      expect(component.cartItems.length).toBe(0);
      component.addToCart(movies[0]);
      expect(component.cartItems.length).toBe(1);
      component.emptyCart();
    })
  });


  it('should add amount when movie already exists in cart', () => {
    expect(component.cartItems.length).toBe(0);
    component.addToCart({ name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://www.munchkin.com/media/catalog/product/3/1/31001_white_hot_safety_bath_ducky.jpg', id: 1, productCategory: [{ "categoryId": 7, "category": null }] });
    component.addToCart({ name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://www.munchkin.com/media/catalog/product/3/1/31001_white_hot_safety_bath_ducky.jpg', id: 1, productCategory: [{ "categoryId": 7, "category": null }] });
    expect(component.cartItems.length).toBe(1);
    component.emptyCart();
  });

  it('should remove 1 item in cart', () => {
    expect(component.cartItems.length).toBe(0);
    component.addToCart({ name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://www.munchkin.com/media/catalog/product/3/1/31001_white_hot_safety_bath_ducky.jpg', id: 1, productCategory: [{ "categoryId": 7, "category": null }] });
    expect(component.cartItems.length).toBe(1);
    component.removeFromCart({ name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://www.munchkin.com/media/catalog/product/3/1/31001_white_hot_safety_bath_ducky.jpg', id: 1, productCategory: [{ "categoryId": 7, "category": null }] });
    expect(component.cartItems.length).toBe(0);
    component.emptyCart();
  });

  it('should empty cart', () => {
    expect(component.cartItems.length).toBe(0);
    component.addToCart({ name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://www.munchkin.com/media/catalog/product/3/1/31001_white_hot_safety_bath_ducky.jpg', id: 1, productCategory: [{ "categoryId": 7, "category": null }] });
    expect(component.cartItems.length).toBe(1);
    component.emptyCart();
    expect(component.cartItems.length).toBe(0);
  });

  it('should add and remove movie price in totalprice in localstorage', () => {
    expect(component.totalCartPrice).toEqual(0);
    component.addToCart({ name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://www.munchkin.com/media/catalog/product/3/1/31001_white_hot_safety_bath_ducky.jpg', id: 1, productCategory: [{ "categoryId": 7, "category": null }] });
    expect(component.totalCartPrice).toEqual(10);
    component.removeFromCart({ name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://www.munchkin.com/media/catalog/product/3/1/31001_white_hot_safety_bath_ducky.jpg', id: 1, productCategory: [{ "categoryId": 7, "category": null }] });
    expect(component.totalCartPrice).toEqual(0);
    component.emptyCart();
  });

});
