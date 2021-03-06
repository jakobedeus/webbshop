import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { ShowProductsComponent } from '../show-products/show-products.component';
import { BannerComponent } from '../banner/banner.component';
import { ProductPresentationComponent } from '../product-presentation/product-presentation.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { ShowCartComponent } from '../show-cart/show-cart.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let activatedRoute = new ActivatedRouteStub({id:1});

  beforeEach(async(() => {
    activatedRoute.setParamMap({id:1});
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent, ShowProductsComponent, BannerComponent, ProductPresentationComponent, HeaderComponent, SearchComponent, ShowCartComponent ],
      imports:[RouterTestingModule, HttpClientModule],
      providers: [
        {provide: activatedRoute, useValue: activatedRoute},
        {provide: DataService, useClass: MockDataService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
