import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPresentationComponent } from './product-presentation.component';
import { ShowProductsComponent } from '../show-products/show-products.component';
import { IMovie } from '../interface/IMovies';
import { Component } from '@angular/core';


describe('ProductPresentationComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  // let component: ProductPresentationComponent;
  // let fixture: ComponentFixture<ProductPresentationComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPresentationComponent, ShowProductsComponent, TestHostComponent ]
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

  // it('should create a movie', () => {
  //   expect(testHostComponent.setInput).toBeTruthy();
  // });

  // it('should create a div with text hej', () => {
  //   expect(testHostFixture.nativeElement.querySelector('div').innerText).toContain('Hej');
  // });

  @Component({
    selector:'host-component',
    template: '<app-product-presentation movie="movie"></app-product-presentation>'
  })



  class TestHostComponent{
    movie: IMovie[];

    setInput(newInput: IMovie[]) {
      this.movie = newInput;
    }
  }

  
});
