import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPresentationComponent } from './product-presentation.component';
import { ShowProductsComponent } from '../show-products/show-products.component';
import { IMovie } from '../interface/IMovies';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { InteractionService } from '../services/interaction.service';
import { ICart } from '../interface/ICart';
import { HttpClientModule } from '@angular/common/http';



describe('ProductPresentationComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPresentationComponent, ShowProductsComponent, TestHostComponent ],
      imports:[RouterTestingModule, HttpClientModule]
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
  
    // ngOnInit() {
    //   this.cartData.cartSource$.subscribe(cartItem => this.cartItem = cartItem);
    // }
  
    // addToCart(movie, amount) {
    //   this.cartData.newCart(movie, amount);
    // }
    
  }
});
