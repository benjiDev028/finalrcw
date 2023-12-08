import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminelAddComponent } from './criminel-add.component';

describe('CriminelAddComponent', () => {
  let component: CriminelAddComponent;
  let fixture: ComponentFixture<CriminelAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriminelAddComponent]
    });
    fixture = TestBed.createComponent(CriminelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
