import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let activatedRoute = new ActivatedRouteStub({id:1});

  beforeEach(async(() => {
    activatedRoute.setParamMap({id:1});
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      imports:[RouterTestingModule, HttpClientModule],
      providers: [
        {provide: activatedRoute, usevalue: activatedRoute},
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
