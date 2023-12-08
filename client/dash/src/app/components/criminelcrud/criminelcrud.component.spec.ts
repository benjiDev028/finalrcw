import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminelcrudComponent } from './criminelcrud.component';

describe('CriminelcrudComponent', () => {
  let component: CriminelcrudComponent;
  let fixture: ComponentFixture<CriminelcrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriminelcrudComponent]
    });
    fixture = TestBed.createComponent(CriminelcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
