import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInsuredComponent } from './update-insured.component';

describe('UpdateInsuredComponent', () => {
  let component: UpdateInsuredComponent;
  let fixture: ComponentFixture<UpdateInsuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInsuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
