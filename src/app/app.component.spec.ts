import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ProductPresentationComponent } from './product-presentation/product-presentation.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { CartPresentationComponent } from './cart-presentation/cart-presentation.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ShowProductsComponent,
        ProductPresentationComponent,
        MoviesComponent,
        ShowCartComponent,
        CartPresentationComponent,
        SearchComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'webbshop-jakob-edeus'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('webbshop-jakob-edeus');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to webbshop-jakob-edeus!');
  // });
});
