import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCartComponent } from './show-cart.component';
import { CartPresentationComponent } from '../cart-presentation/cart-presentation.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';

describe('ShowCartComponent', () => {
  let component: ShowCartComponent;
  let fixture: ComponentFixture<ShowCartComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ ShowCartComponent, CartPresentationComponent, HeaderComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCartComponent, CartPresentationComponent ],
      imports:[RouterTestingModule]
    })
    .overrideComponent(ShowCartComponent, { set: { providers: [ {provide: DataService, useClass: MockDataService}]}})
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

  

});
