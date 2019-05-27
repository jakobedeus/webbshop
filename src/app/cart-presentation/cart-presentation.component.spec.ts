import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCartComponent } from '../show-cart/show-cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ICart } from '../interface/ICart';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CartPresentationComponent } from './cart-presentation.component';
import { HttpClientModule } from '@angular/common/http';

// describe('CartPresentationComponent', () => {
//   let component: CartPresentationComponent;
//   let fixture: ComponentFixture<CartPresentationComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CartPresentationComponent, ShowCartComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CartPresentationComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


// });

describe('CartPresentationComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  // let component: ProductPresentationComponent;
  // let fixture: ComponentFixture<ProductPresentationComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCartComponent, TestHostComponent, CartPresentationComponent ],
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
    template: '<app-cart-presentation cartItem="cartItem"></app-cart-presentation>'

  })

  class TestHostComponent{
    cartItem: ICart[];

    setInput(newInput: ICart[]) {
      this.cartItem = newInput;
    }
  }
});
