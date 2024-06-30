import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarifionBodyComponent } from './clarifion-body.component';

describe('ClarifionBodyComponent', () => {
  let component: ClarifionBodyComponent;
  let fixture: ComponentFixture<ClarifionBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClarifionBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClarifionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
