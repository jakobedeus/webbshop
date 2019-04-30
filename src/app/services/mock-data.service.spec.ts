import { TestBed, async } from '@angular/core/testing';

import { MockDataService } from './mock-data.service';

import { DataService } from './data.service';
import { ShowProductsComponent } from '../show-products/show-products.component';
import { ProductPresentationComponent } from '../product-presentation/product-presentation.component';

describe('MockDataServiceService', () => {

    beforeEach(() => TestBed.configureTestingModule({
    }));

  it('should be created', () => {
    const service: MockDataService = TestBed.get(MockDataService);
    expect(service).toBeTruthy();
  });
});
