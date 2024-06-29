import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionGuaranteeComponent } from './satisfaction-guarantee.component';

describe('SatisfactionGuaranteeComponent', () => {
  let component: SatisfactionGuaranteeComponent;
  let fixture: ComponentFixture<SatisfactionGuaranteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatisfactionGuaranteeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatisfactionGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
