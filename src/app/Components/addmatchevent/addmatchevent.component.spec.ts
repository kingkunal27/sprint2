import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatcheventComponent } from './addmatchevent.component';

describe('AddmatcheventComponent', () => {
  let component: AddmatcheventComponent;
  let fixture: ComponentFixture<AddmatcheventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmatcheventComponent]
    });
    fixture = TestBed.createComponent(AddmatcheventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
