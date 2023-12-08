import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimineleditComponent } from './crimineledit.component';

describe('CrimineleditComponent', () => {
  let component: CrimineleditComponent;
  let fixture: ComponentFixture<CrimineleditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrimineleditComponent]
    });
    fixture = TestBed.createComponent(CrimineleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
