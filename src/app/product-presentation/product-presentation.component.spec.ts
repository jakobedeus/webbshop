import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPresentationComponent } from './product-presentation.component';
import { ShowProductsComponent } from '../show-products/show-products.component';
import { IMovie } from '../interface/IMovies';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { InteractionService } from '../services/interaction.service';
import { ICart } from '../interface/ICart';



describe('ProductPresentationComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPresentationComponent, ShowProductsComponent, TestHostComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should create 1 cart item', () => {
    expect(testHostComponent.cartItem.length).toBe(0);
    testHostComponent.addToCart({ name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://www.munchkin.com/media/catalog/product/3/1/31001_white_hot_safety_bath_ducky.jpg', id: 1, productCategory :[{"categoryId":7,"category":null}]});
    expect(testHostComponent.cartItem.length).toBe(1);
  });
  

  @Component({
    selector:'host-component',
    template: '<app-product-presentation movie="movie"></app-product-presentation>'

    
  })

  class TestHostComponent{
    movie: IMovie[];

    setInput(newInput: IMovie[]) {
      this.movie = newInput;
    }

    constructor(private cartData: InteractionService) { }
    
    cartItem: ICart[];
  
    ngOnInit() {
      this.cartData.currentCart.subscribe(cartItem => this.cartItem = cartItem);
    }
  
    addToCart(movie) {
      this.cartData.newCart(movie);
    }
    
  }
});
