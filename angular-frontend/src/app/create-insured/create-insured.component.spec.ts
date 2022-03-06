import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsuredComponent } from './create-insured.component';

describe('CreateInsuredComponent', () => {
  let component: CreateInsuredComponent;
  let fixture: ComponentFixture<CreateInsuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
