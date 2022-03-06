import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInsuredComponent } from './detail-insured.component';

describe('DetailInsuredComponent', () => {
  let component: DetailInsuredComponent;
  let fixture: ComponentFixture<DetailInsuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInsuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
