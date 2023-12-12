import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddseatComponent } from './addseat.component';

describe('AddseatComponent', () => {
  let component: AddseatComponent;
  let fixture: ComponentFixture<AddseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddseatComponent]
    });
    fixture = TestBed.createComponent(AddseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
