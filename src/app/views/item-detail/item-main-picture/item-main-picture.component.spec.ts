import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMainPictureComponent } from './item-main-picture.component';

describe('ItemMainPictureComponent', () => {
  let component: ItemMainPictureComponent;
  let fixture: ComponentFixture<ItemMainPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemMainPictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMainPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
