import { TestBed } from '@angular/core/testing';

import { CocktailService } from './cocktail-service.service';

describe('CocktailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocktailService = TestBed.get(CocktailService);
    expect(service).toBeTruthy();
  });
});
