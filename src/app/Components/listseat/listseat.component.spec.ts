import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListseatComponent } from './listseat.component';

describe('ListseatComponent', () => {
  let component: ListseatComponent;
  let fixture: ComponentFixture<ListseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListseatComponent]
    });
    fixture = TestBed.createComponent(ListseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
