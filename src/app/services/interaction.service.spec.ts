import { TestBed } from '@angular/core/testing';

import { InteractionService } from './interaction.service';
import { HttpClientModule } from '@angular/common/http';

describe('InteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: InteractionService = TestBed.get(InteractionService);
    expect(service).toBeTruthy();
  });
});
