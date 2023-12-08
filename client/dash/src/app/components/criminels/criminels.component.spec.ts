import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminelsComponent } from './criminels.component';

describe('CriminelsComponent', () => {
  let component: CriminelsComponent;
  let fixture: ComponentFixture<CriminelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriminelsComponent]
    });
    fixture = TestBed.createComponent(CriminelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
