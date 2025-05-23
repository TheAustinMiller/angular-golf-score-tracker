import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfListComponent } from './golf-list.component';

describe('GolfListComponent', () => {
  let component: GolfListComponent;
  let fixture: ComponentFixture<GolfListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolfListComponent]
    });
    fixture = TestBed.createComponent(GolfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
