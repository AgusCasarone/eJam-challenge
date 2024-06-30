import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPayComponent } from './item-pay.component';

describe('ItemPayComponent', () => {
  let component: ItemPayComponent;
  let fixture: ComponentFixture<ItemPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
