import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDiscountComponent } from './claim-discount.component';

describe('ClaimDiscountComponent', () => {
  let component: ClaimDiscountComponent;
  let fixture: ComponentFixture<ClaimDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
