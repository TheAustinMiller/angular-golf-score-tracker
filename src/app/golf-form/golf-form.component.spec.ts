import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfFormComponent } from './golf-form.component';

describe('GolfFormComponent', () => {
  let component: GolfFormComponent;
  let fixture: ComponentFixture<GolfFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolfFormComponent]
    });
    fixture = TestBed.createComponent(GolfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
