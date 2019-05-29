import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ShowCartComponent } from '../show-cart/show-cart.component';
import { CartPresentationComponent } from '../cart-presentation/cart-presentation.component';
import { SearchComponent } from '../search/search.component';
import { AdminComponent } from '../admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, ShowCartComponent, CartPresentationComponent, SearchComponent, AdminComponent ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle cart', () => {
    expect(component.cart).toBeFalsy();
    component.toggleCart();
    expect(component.cart).toBeTruthy();
  });
});
